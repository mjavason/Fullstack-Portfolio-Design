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

    fetchPosts: builder.query<ISuccessResponse<IPost[]>, IPostsQuery>({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params: params,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useFetchPostsQuery } = postApi;
