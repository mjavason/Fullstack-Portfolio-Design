import { baseApi } from '@/redux/baseApi';
import { tagTypes } from '@/redux/baseApi/tagTypes';

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<ISuccessResponse<null>, CreatePostDTO>({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [{ type: tagTypes.POSTS }],
    }),

    fetchPosts: builder.query<ISuccessResponse<IPost[]>, IPostsQuery>({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params: params,
      }),
      providesTags: [{ type: tagTypes.POSTS }],
    }),
  }),
});

export const { useCreatePostMutation, useFetchPostsQuery } = postApi;
