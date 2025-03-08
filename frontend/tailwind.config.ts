import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';
import { accentPrimary, accentSecondary } from './src/config/constants';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['var(--font-heebo)', 'sans-serif'],
      },
      colors: {
        primary: '#21243D', // Dark Blue Text
        secondary: '#8695A4', // Muted Text
        accent: {
          primary: accentPrimary,
          secondary: accentSecondary,
        },
        background: {
          primary: '#FFFFFF', // White
          secondary: '#EDF7FA', // Light Blue Background
        },
        link: {
          primary: '#00A8CC', // Blue Links
        },
      },
    },
  },

  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
