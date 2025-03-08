import { baseApi } from '@/redux/baseApi';
import { tagTypes } from '@/redux/baseApi/tagTypes';
import {
  IProfile,
  IRecentTransaction,
  IVerifyBusinessDetails,
  IVerifyPersonalInformation,
} from './interface';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileDetails: builder.query<ISuccessResponse<IProfile>, void>({
      query: () => ({
        url: '/account-setup',
        method: 'GET',
      }),
      providesTags: [{ type: tagTypes.PROFILE }],
    }),

    verifyPersonalInformation: builder.mutation<
      ISuccessResponse<IVerifyPersonalInformation>,
      IVerifyPersonalInformation
    >({
      query: (data) => ({
        url: '/account-setup/personal-information',
        method: 'PUT',
        data: data,
      }),
      invalidatesTags: [{ type: tagTypes.PROFILE }],
    }),
    verifyBusinessInformation: builder.mutation<
      ISuccessResponse<IVerifyBusinessDetails>,
      IVerifyBusinessDetails
    >({
      query: (data) => ({
        url: '/account-setup/business-information',
        method: 'PUT',
        data: data,
      }),
      invalidatesTags: [{ type: tagTypes.PROFILE }],
    }),
    merchantRecentTransaction: builder.query<ISuccessResponse<IRecentTransaction[]>, void>({
      query: () => ({
        url: '/reports/analytics/recent-paid-transactions',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useVerifyPersonalInformationMutation,
  useGetProfileDetailsQuery,
  useVerifyBusinessInformationMutation,
  useMerchantRecentTransactionQuery,
} = profileApi;
