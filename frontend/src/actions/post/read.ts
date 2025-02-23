'use server';
import { API_BASE_URL } from '@/config/constants';
import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
