import { baseApi } from '@/redux/baseApi';

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<ISuccessResponse<null>, CreatePostDTO>({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = postApi;
