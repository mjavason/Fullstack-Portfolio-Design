import { Document } from 'mongoose';

export interface IProject {
  title: string;
  category: string;
  coverImage: string;
  summary: string;
  body: string;
  
}

export interface IProjectDocument extends IProject, Document {}
