'use server';
import { API_BASE_URL } from '@/config/constants';
import axios from 'axios';

export const createPost = async (postData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, postData);
    return response.data;
  } catch (error: unknown) {
    console.error('Error creating post:', error);
    throw error;
  }
};
