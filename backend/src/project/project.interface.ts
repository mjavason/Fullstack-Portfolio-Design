import { Document } from 'mongoose';

export interface IProject {
  title: string;
  category: string;
  coverImage: string;
  summary: string;
  body: string;
  published: boolean;
}

export interface IProjectDocument extends IProject, Document {}

export const projectFieldOptions: (keyof IProject)[] = ['title', 'summary', 'body', 'category'];
