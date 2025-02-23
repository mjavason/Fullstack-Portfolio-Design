'use server';
import { API_BASE_URL } from '@/config/constants';
import axios from 'axios';

// Define the action creator
export const createWork = async () => {
  try {
    // Make a POST request to the external API
    const response = await axios.post(`${API_BASE_URL}/work`, {});
    return response.data;
  } catch (error: unknown) {
    console.error('Error creating work:', error);
    // Handle the error appropriately
  }
};
