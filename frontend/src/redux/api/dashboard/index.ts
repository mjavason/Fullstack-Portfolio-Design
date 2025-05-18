import { baseApi } from '@/redux/baseApi';
import { tagTypes } from '@/redux/baseApi/tagTypes';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchDashboardSummary: builder.query<ISuccessResponse<IDashboardSummary>, null>({
      query: () => ({
        url: '/analytics/dashboard/summary',
        method: 'GET',
      }),
      providesTags: [{ type: tagTypes.DASHBOARD }],
    }),
  }),
});

export const { useFetchDashboardSummaryQuery } = dashboardApi;
