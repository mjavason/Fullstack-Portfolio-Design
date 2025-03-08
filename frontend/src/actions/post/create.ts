'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const createPost = async (postData: object) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    return response.data;
  } catch (error: unknown) {
    console.error('Error creating post:', error);
    throw error;
  }
};
