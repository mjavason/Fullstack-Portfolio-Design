'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const updateSocial = async (id: string, data: object) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (error: unknown) {
    console.error('Error updating social:', error);
    throw error;
  }
};
