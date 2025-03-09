import dotenv from 'dotenv';
dotenv.config();

// "https://fullstack-portfolio-backend-yyhy.onrender.com/api/v1";
// "http://localhost:5000/api/v1"
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:5000/api/v1';

export const lightBlue = '#A5D0FF';
export const darkBlue = '#4CA2FE';
export const accentPrimary = '#FF6464';
export const accentSecondary = '#FFCBCB';
export const ACCOUNT_SETUP = 'ACCOUNT_SETUP';
