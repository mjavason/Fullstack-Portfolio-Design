import { BadRequestException, Injectable } from '@nestjs/common';
import { Document, FilterQuery } from 'mongoose';
import { getUTCMonthStartAndEnd } from '../utils/date.util';
import { PaginateModel } from '../interfaces';

@Injectable()
export class GenericService<T extends Document> {
  private model: PaginateModel<T>;
  constructor(private readonly _model: any) {
    this.model = _model;
  }

  async createMultiple(multiCreateDto: Partial<T>[]) {
    return await this.model.create(multiCreateDto);
  }

  async create(createDto: Partial<T>) {
    return await this.model.create(createDto);
  }

  async findAll(filter: FilterQuery<T>) {
    const page = filter.pagination_page ?? 1;
    const size = filter.pagination_size ?? 10;

    delete filter.pagination_page;
    delete filter.pagination_size;

    return await this.model.paginate(filter, { limit: size, page: page });
  }

  async findAllNoPagination(filter: FilterQuery<T>) {
    return await this.model.find(filter).sort({ createdAt: 'desc' });
  }

  async findAllNoAutoPopulate(filter: FilterQuery<T>) {
    return await this.model
      .find(filter)
      .sort({ createdAt: 'desc' })
      .setOptions({ autopopulate: false });
  }

  async findOne(filter: FilterQuery<T>) {
    return await this.model.findOne(filter);
  }

  async findOneNoAutoPopulate(filter: FilterQuery<T>) {
    return await this.model.findOne(filter).setOptions({ autopopulate: false });
  }

  async multiFieldSearch(filter: {
    searchTerm: string;
    fields: string[];
    pagination_page: number;
    pagination_size: number;
  }) {
    if (!filter.searchTerm || filter.searchTerm.trim() === '') {
      return this.model.paginate(
        {},
        { page: filter.pagination_page, limit: filter.pagination_size },
      );
    }

    const regex = new RegExp(filter.searchTerm, 'i');

    const orQueries = filter.fields.map((field) => ({
      [field]: regex,
    }));

    return await this.model.paginate(
      { $or: orQueries as FilterQuery<T>[] },
      { page: filter.pagination_page, limit: filter.pagination_size },
    );
  }

  async multiFieldSearchNoPagination(searchTerm: string, fields: (keyof T)[]): Promise<T[]> {
    if (!searchTerm || searchTerm.trim() === '') {
      return this.model.find().exec();
    }

    const regex = new RegExp(searchTerm, 'i');

    const orQueries = fields.map((field) => ({
      [field]: regex,
    }));

    return await this.model.find({ $or: orQueries as FilterQuery<T>[] }).exec();
  }

  async getMonthlyGrowth(filter: FilterQuery<T>) {
    const now = new Date();
    const prevMonth = getUTCMonthStartAndEnd(now.getFullYear(), now.getMonth() - 1);
    const currMonth = getUTCMonthStartAndEnd(now.getFullYear(), now.getMonth());

    const result = await this.model.aggregate([
      {
        $match: {
          ...filter,
          createdAt: { $gte: prevMonth.startDate },
        },
      },
      {
        $project: {
          month: { $month: '$createdAt' },
          year: { $year: '$createdAt' },
        },
      },
      {
        $group: {
          _id: { year: '$year', month: '$month' },
          itemCount: { $sum: 1 },
        },
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 },
      },
    ]);

    const previousMonthCount =
      result.find(
        (entry) =>
          entry._id.year === prevMonth.startDate.getFullYear() &&
          entry._id.month === prevMonth.startDate.getMonth() + 1,
      )?.itemCount || 0;

    const currentMonthCount =
      result.find(
        (entry) =>
          entry._id.year === currMonth.startDate.getFullYear() &&
          entry._id.month === currMonth.startDate.getMonth() + 1,
      )?.itemCount || 0;

    const percentageDifference =
      previousMonthCount === 0
        ? currentMonthCount > 0
          ? 100
          : 0
        : ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

    return { percentageDifference, currentMonthCount, previousMonthCount };
  }

  async getTotalItems(filter: FilterQuery<T>) {
    const result = await this.model.aggregate([
      {
        $match: filter,
      },
      {
        $count: 'total',
      },
    ]);

    return result[0]?.total || 0;
  }

  async update(id: string, updateDto: Partial<T>) {
    const result = await this.model.findByIdAndUpdate(id, updateDto, {
      new: true,
    });

    if (!result) {
      throw new BadRequestException("Unable to update entity, it does'nt exist?");
    }

    return result;
  }

  async remove(id: string) {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) {
      throw new BadRequestException("Unable to delete entity, it does'nt exist?");
    }

    return result;
  }

  async calculateWeeklyReport(filter: FilterQuery<T>) {
    const report = await this.model.aggregate([
      {
        $match: filter,
      },
      {
        $group: {
          _id: { dayOfWeek: { $dayOfWeek: '$createdAt' } },
          total: { $sum: 1 },
        },
      },
      {
        $sort: { '_id.dayOfWeek': 1 },
      },
      {
        $project: {
          dayOfWeek: '$_id.dayOfWeek',
          total: 1,
          _id: 0,
        },
      },
    ]);

    const dayNames = [
      '',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const fullWeek = dayNames.slice(1).map((day) => ({
      dayOfWeek: day,
      total: 0,
    }));

    report.forEach((report) => {
      const dayIndex = report.dayOfWeek - 1;
      fullWeek[dayIndex].total = report.total;
    });

    return fullWeek;
  }
}
