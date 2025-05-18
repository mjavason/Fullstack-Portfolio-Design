import { Document } from 'mongoose';

export interface IAnalytics {
  fingerprint: string;
  state: string;
  type: string; //click or visit
  content: string; //project or post
}

export interface IAnalyticsDocument extends IAnalytics, Document {}

export enum ANALYTICS_TYPE {
  CLICK = 'click',
  VISIT = 'visit',
}

export enum CONTENT_TYPE {
  PROJECT = 'project',
  POST = 'post',
}

export const analyticsFieldOptions: (keyof IAnalytics)[] = [
  'fingerprint',
  'content',
  'state',
  'type',
];
