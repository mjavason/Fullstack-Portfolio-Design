import dotenv from 'dotenv';
dotenv.config();

// "https://fullstack-portfolio-backend-yyhy.onrender.com/api/v1";
// "http://localhost:5000/api/v1"
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:5000/api/v1';
export const APP_NAME = 'Fullstack Portfolio Design';
export const APP_DESCRIPTION =
  'A fullstack practice portfolio project with Next.js frontend and Nest.js backend.';
export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
export const APP_PREVIEW_IMAGE =
  'https://res.cloudinary.com/tech-aku/image/upload/v1746971139/fullstack-portfolio/67d2a2622fd399bc3788c19c/jd373mhekixr0zv7soyj.png';

export const lightBlue = '#A5D0FF';
export const darkBlue = '#4CA2FE';
export const accentPrimary = '#FF6464';
export const accentSecondary = '#FFCBCB';
export const ACCOUNT_SETUP = 'ACCOUNT_SETUP';
