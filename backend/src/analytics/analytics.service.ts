import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytics } from './analytics.schema';
import { GenericService } from '../common/providers/generic.service';
import { IAnalyticsDocument } from './analytics.interface';

@Injectable()
export class AnalyticsService extends GenericService<IAnalyticsDocument> {
  constructor(@InjectModel(Analytics.name) private analyticsModel: Model<IAnalyticsDocument>) {
    super(analyticsModel);
  }
}
