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

    updateProject: builder.mutation<
      ISuccessResponse<null>,
      { projectId: string; update: CreateProjectDTO }
    >({
      query: (data) => ({
        url: `/project/${data.projectId}`,
        method: 'PATCH',
        data: data.update,
      }),
      invalidatesTags: [{ type: tagTypes.PROJECTS }],
    }),

    fetchProjectsAdvanced: builder.query<ISuccessResponse<IProject[]>, IAdvancedProjectQuery>({
      query: (params) => ({
        url: '/project/multi-field-search',
        method: 'POST',
        data: params,
      }),
      providesTags: [{ type: tagTypes.PROJECTS }],
    }),

    deleteProjects: builder.mutation<ISuccessResponse, { projectId: string }>({
      query: (params) => ({
        url: `/project/${params.projectId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: tagTypes.PROJECTS }],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useFetchProjectsQuery,
  useUpdateProjectMutation,
  useDeleteProjectsMutation,
  useFetchProjectsAdvancedQuery,
} = projectApi;
