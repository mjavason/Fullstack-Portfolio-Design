'use server';
import { API_BASE_URL } from '@/config/constants';
import axios from 'axios';

export const deleteWork = async (workId: string): Promise<void> => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/work/${workId}`);
    console.log('Work deleted successfully:', response.data);
  } catch (error) {
    console.error('Error deleting work:', error);
    throw error;
  }
};
