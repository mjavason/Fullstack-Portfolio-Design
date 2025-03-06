import { ChartOptions } from 'chart.js';

export const options: ChartOptions<'line'> = {
  animation: {
    duration: 3000, // 🔥 Speeds up chart animations (default is 1000ms)
  },
  scales: {
    x: {
      grid: {
        display: false, // Removes vertical grid lines
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false, // Removes horizontal grid lines
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
      display: false, // 🔥 Hides the legend
    },
  },
};
