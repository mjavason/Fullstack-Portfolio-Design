import { baseApi } from '@/redux/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUpBusiness: builder.mutation<ISuccessResponse<null>, BusinessSignupDTO>({
      query: (data) => ({
        url: '/auth/sign-up',
        method: 'POST',
        data: data,
      }),
    }),

    confirmEmailVerification: builder.mutation<
      ISuccessResponse<EmailVerificationDTO>,
      EmailVerificationDTO
    >({
      query: (data) => ({
        url: '/auth/confirm-email-verification',
        method: 'POST',
        data: data,
      }),
    }),

    resendEmailVerification: builder.mutation<
      ISuccessResponse<null>,
      Pick<EmailVerificationDTO, 'email'>
    >({
      query: (data) => ({
        url: '/auth/resend-email-verification',
        method: 'POST',
        data: data,
      }),
    }),

    userSignIn: builder.mutation<ISuccessResponse<SignInResponse>, UserSignInDTO>({
      query: (data) => ({
        url: '/auth/sign-in',
        method: 'POST',
        data: data,
      }),
    }),

    toggleTwoFa: builder.mutation<ISuccessResponse<null>, void>({
      query: () => ({
        url: '/auth/toggle-two-fa',
        method: 'POST',
      }),
    }),

    forgotPassword: builder.mutation<ISuccessResponse<null>, Pick<EmailVerificationDTO, 'email'>>({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        data: data,
      }),
    }),

    changePassword: builder.mutation<ISuccessResponse<null>, ChangePasswordDTO>({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        data: data,
      }),
    }),

    passwordReset: builder.mutation<
      ISuccessResponse<null>,
      Omit<ResetPasswordResponse, 'password'>
    >({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        data: data,
      }),
    }),

    sendTwoFaCode: builder.mutation<ISuccessResponse<null>, TwoFaCodeSend>({
      query: (data) => ({
        url: '/auth/send-two-fa-code',
        method: 'POST',
        data: data,
      }),
    }),

    confirmTwoFaCode: builder.mutation<
      ISuccessResponse<TwoFaCodeConfirmResponse>,
      TwoFaCodeConfirm
    >({
      query: (data) => ({
        url: '/auth/confirm-two-fa-code',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const {
  useSignUpBusinessMutation,
  useToggleTwoFaMutation,
  useConfirmTwoFaCodeMutation,
  useUserSignInMutation,
  useForgotPasswordMutation,
  usePasswordResetMutation,
  useSendTwoFaCodeMutation,
  useConfirmEmailVerificationMutation,
  useResendEmailVerificationMutation,
  useChangePasswordMutation,
} = authApi;
