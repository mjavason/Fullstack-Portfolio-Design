import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IPost } from './post.interface';

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
export class Post implements IPost {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], required: true })
  categories: string[];

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  body: string;

  @Prop({ default: false })
  published: boolean;
}

export const postSchema = SchemaFactory.createForClass(Post);
