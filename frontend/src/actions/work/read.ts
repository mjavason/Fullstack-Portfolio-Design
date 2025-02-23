'use server';
import { API_BASE_URL } from '@/config/constants';
import axios from 'axios';

export const fetchWorkData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/work`);
    return response.data;
  } catch (error) {
    console.error('Error fetching work data:', error);
    throw error;
  }
};
