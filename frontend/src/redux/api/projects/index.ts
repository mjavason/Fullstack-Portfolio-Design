import { baseApi } from '@/redux/baseApi';
import { tagTypes } from '@/redux/baseApi/tagTypes';

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation<ISuccessResponse<null>, CreateProjectDTO>({
      query: (data) => ({
        url: '/project',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [{ type: tagTypes.PROJECTS }],
    }),

    fetchProjects: builder.query<ISuccessResponse<IProject[]>, IProjectQuery>({
      query: (params) => ({
        url: '/project',
        method: 'GET',
        params: params,
      }),
      providesTags: [{ type: tagTypes.PROJECTS }],
    }),
  }),
});

export const { useCreateProjectMutation, useFetchProjectsQuery } = projectApi;
