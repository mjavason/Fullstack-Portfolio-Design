import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['var(--font-heebo)', 'sans-serif']
      },
      colors: {
        primary: '#21243D',         // Dark Blue Text
        secondary: '#8695A4',       // Muted Text
        button: {
          primary: '#FF6464',       // Red Button
        },
        background: {
          primary: '#FFFFFF',       // White
          secondary: '#EDF7FA',     // Light Blue Background
        },
        link: {
          primary: '#00A8CC',       // Blue Links
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
