import { accentPrimary, accentSecondary } from '@/config/constants';
import { ChartOptions } from 'chart.js';

export const options: ChartOptions<'doughnut'> = {
  animation: {
    duration: 3000,
  },
  rotation: 0, // Starts at top
  circumference: 360, // Full circle
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      fullSize: true,
      labels: {
        generateLabels: function (this) {
          return [
            {
              text: 'Projects',
              fillStyle: accentPrimary,
              strokeStyle: accentPrimary,
            },
            {
              text: 'Posts',
              fillStyle: accentSecondary,
              strokeStyle: accentSecondary,
            },
          ];
        },
      },
    },
  },
};
