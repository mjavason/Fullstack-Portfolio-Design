import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IAnalytics } from './analytics.interface';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Analytics implements IAnalytics {
  @Prop({ required: true })
  fingerprint: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  content: string;
}

export const analyticsSchema = SchemaFactory.createForClass(Analytics);
