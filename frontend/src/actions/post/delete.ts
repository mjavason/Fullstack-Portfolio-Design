'use server';
import { API_BASE_URL } from '@/config/constants/constants';
import axios from 'axios';

export const deletePost = async (postId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
