'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const updatePost = async (postId: string, updatedData: object) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/posts/${postId}`, updatedData);
    return response.data;
  } catch (error: unknown) {
    console.error('Error updating post:', error);
    throw error;
  }
};
