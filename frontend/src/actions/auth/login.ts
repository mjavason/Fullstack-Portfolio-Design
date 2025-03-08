'use server';
import { BASE_URL } from '@/config/constants';
import axios from 'axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
