'use server';

import { BASE_URL } from '@/config/constants';
import { tagTypes } from '@/redux/baseApi/tagTypes';

export async function fetchProjects(page: number = 1, limit: number = 10) {
  try {
    const res = await fetch(
      `${BASE_URL}/project?pagination_page=${page}&pagination_size=${limit}`,
      {
        method: 'GET',
        next: {
          tags: [tagTypes.PROJECTS],
        },
      },
    );

    if (!res.ok) return [];

    const response = await res.json();
    return response.data as IProject[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function fetchSingleProject(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/project/${id}`, {
      method: 'GET',
      next: {
        tags: [`${tagTypes.PROJECTS}-${id}`],
      },
    });

    if (!res.ok) return null;

    const response = await res.json();
    return response.data as IProject;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
