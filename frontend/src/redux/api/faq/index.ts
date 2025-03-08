import { baseApi } from '@/redux/baseApi';
import { tagTypes } from '@/redux/baseApi/tagTypes';

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFAQs: builder.query<IPaginatedResponse<IFAQ>, IQuery | void>({
      query: (params) => ({
        url: `/faqs`,
        method: 'GET',
        params,
      }),
      providesTags: [{ type: tagTypes.FAQS }],
    }),
    getSingleFAQ: builder.query<ISuccessResponse<IFAQ>, string>({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: 'GET',
      }),
      providesTags: (_result, _error, id) => [{ type: tagTypes.FAQS, id: id }],
    }),
  }),
});

export const { useGetAllFAQsQuery, useGetSingleFAQQuery } = faqApi;
