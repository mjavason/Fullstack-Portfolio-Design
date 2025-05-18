import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytics } from './analytics.schema';
import { GenericService } from '../common/providers/generic.service';
import { ANALYTICS_TYPE, IAnalyticsDocument } from './analytics.interface';
import { MONTH_NAMES, MONTH_NAMES_SHORT } from 'src/common/configs/constants';

@Injectable()
export class AnalyticsService extends GenericService<IAnalyticsDocument> {
  constructor(@InjectModel(Analytics.name) private analyticsModel: Model<IAnalyticsDocument>) {
    super(analyticsModel);
  }

  async getUniqueVisitorsPerMonth(): Promise<{ labels: string[]; data: number[] }> {
    const results = await this.analyticsModel.aggregate([
      {
        $match: { type: ANALYTICS_TYPE.VISIT },
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' },
            year: { $year: '$createdAt' },
            fingerprint: '$fingerprint',
          },
        },
      },
      {
        $group: {
          _id: { month: '$_id.month', year: '$_id.year' },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 },
      },
    ]);

    const data = new Array(12).fill(0);
    for (const item of results) {
      const monthIndex = item._id.month - 1;
      data[monthIndex] = item.count;
    }

    return { labels: MONTH_NAMES, data };
  }

  async getTopLocations(): Promise<{ state: string; percentage: number }[]> {
    const total = await this.analyticsModel.countDocuments({ type: ANALYTICS_TYPE.VISIT });
    if (total === 0) return [];

    const grouped = await this.analyticsModel.aggregate([
      { $match: { type: ANALYTICS_TYPE.VISIT } },
      { $group: { _id: '$state', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 3 },
    ]);

    return grouped.map((item) => ({
      state: item._id,
      percentage: Math.round((item.count / total) * 100),
    }));
  }

  async getContentClicks(): Promise<{ labels: string[]; dataValues: number[] }> {
    const results = await this.analyticsModel.aggregate([
      {
        $match: { type: ANALYTICS_TYPE.CLICK },
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { '_id.month': 1 },
      },
    ]);

    const dataValues = new Array(12).fill(0);
    for (const item of results) {
      const monthIndex = item._id.month - 1;
      dataValues[monthIndex] = item.count;
    }

    return { labels: MONTH_NAMES_SHORT, dataValues };
  }

  async getProjectVsPostClicks(): Promise<{ labels: string[]; data: number[] }> {
    const [projectCount, postCount] = await Promise.all([
      this.analyticsModel.countDocuments({ type: 'click', content: 'project' }),
      this.analyticsModel.countDocuments({ type: 'click', content: 'post' }),
    ]);

    return {
      labels: ['Posts', 'Projects'],
      data: [postCount, projectCount],
    };
  }
}
