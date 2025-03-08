import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IProject } from './project.interface';

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
export class Project implements IProject {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  coverImage: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  body: string;
}

export const projectSchema = SchemaFactory.createForClass(Project);
