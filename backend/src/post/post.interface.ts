import { Document } from 'mongoose';

export interface IPost {
  title: string;
  categories: string[];
  summary: string;
  body: string;
}

export interface IPostDocument extends IPost, Document {}
