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

    updatePost: builder.mutation<ISuccessResponse<null>, { postId: string; update: CreatePostDTO }>(
      {
        query: (data) => ({
          url: `/posts/${data.postId}`,
          method: 'PATCH',
          data: data.update,
        }),
        invalidatesTags: [{ type: tagTypes.POSTS }],
      },
    ),

    fetchPosts: builder.query<ISuccessResponse<IPost[]>, IPostsQuery>({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params: params,
      }),
      providesTags: [{ type: tagTypes.POSTS }],
    }),

    fetchPostsAdvanced: builder.query<ISuccessResponse<IPost[]>, IAdvancedPostQuery>({
      query: (params) => ({
        url: '/posts/multi-field-search',
        method: 'POST',
        data: params,
      }),
      providesTags: [{ type: tagTypes.POSTS }],
    }),

    deletePosts: builder.mutation<ISuccessResponse, { postId: string }>({
      query: (params) => ({
        url: `/posts/${params.postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: tagTypes.POSTS }],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useUpdatePostMutation,
  useFetchPostsQuery,
  useDeletePostsMutation,
  useFetchPostsAdvancedQuery,
} = postApi;
