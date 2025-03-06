import { darkBlue, lightBlue } from '@/config/constants';
import { ChartOptions } from 'chart.js';

export const options: ChartOptions<'bar'> = {
  animation: {
    duration: 3000,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
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
              text: 'Up',
              fillStyle: darkBlue,
              strokeStyle: darkBlue,
            },
            {
              text: 'Down',
              fillStyle: lightBlue,
              strokeStyle: lightBlue,
            },
          ];
        },
      },
    },
  },
};
