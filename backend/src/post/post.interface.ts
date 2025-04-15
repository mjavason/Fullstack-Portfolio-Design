import { Document } from 'mongoose';

export interface IPost {
  title: string;
  categories: string[];
  summary: string;
  body: string;
  published: boolean;
}

export interface IPostDocument extends IPost, Document {}

export const postFieldOptions: (keyof IPost)[] = ['title', 'summary', 'body', 'categories'];
