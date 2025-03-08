'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const deletePost = async (postId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
