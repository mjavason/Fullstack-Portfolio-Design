'use server';
import { API_BASE_URL } from '@/config/constants/constants';
import axios from 'axios';

export const updatePost = async (postId: string, updatedData: object) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/posts/${postId}`, updatedData);
    return response.data;
  } catch (error: unknown) {
    console.error('Error updating post:', error);
    throw error;
  }
};
