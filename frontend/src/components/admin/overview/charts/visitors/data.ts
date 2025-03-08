import { darkBlue } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets: ChartDataset<'line'>[] = [
  {
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: darkBlue,
    tension: 0.4,
    pointRadius: 5,
    pointHoverRadius: 10,
  },
];

export const data: ChartData<'line'> = {
  labels,
  datasets,
};
