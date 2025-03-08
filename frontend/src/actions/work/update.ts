'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const updateWork = async (workId: string, updateData: object) => {
  try {
    const response = await axios.put(`${BASE_URL}/work/${workId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating work:', error);
    throw error;
  }
};
