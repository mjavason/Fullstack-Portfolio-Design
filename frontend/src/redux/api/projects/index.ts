import { baseApi } from '@/redux/baseApi';

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation<ISuccessResponse<null>, CreateProjectDTO>({
      query: (data) => ({
        url: '/project',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = projectApi;
