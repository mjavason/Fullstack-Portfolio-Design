import { BASE_URL } from '@/config/constants';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
import { tagTypes } from './tagTypes';

export const baseApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL!,
    baseHeaders: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});
