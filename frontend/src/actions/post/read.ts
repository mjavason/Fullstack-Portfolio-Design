'use server';

import { BASE_URL } from '@/config/constants';
import { tagTypes } from '@/redux/baseApi/tagTypes';

export async function fetchPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: 'GET',
      next: {
        tags: [tagTypes.POSTS],
      },
    });

    if (!res.ok) return [];

    const response = await res.json();
    return response.data as IPost[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function fetchSinglePost(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'GET',
      next: {
        tags: [`${tagTypes.POSTS}-${id}`],
      },
    });

    if (!res.ok) return null;

    const response = await res.json();
    return response.data as IPost;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
