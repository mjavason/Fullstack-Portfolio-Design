import { accentPrimary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data_ = [65, 59, 80, 81, 56, 55, 40];

const datasets: ChartDataset<'line'>[] = [
  {
    label: 'Unique Visitors',
    data: data_,
    fill: false,
    borderColor: accentPrimary,
    tension: 0.4,
    pointRadius: 5,
    pointHoverRadius: 10,
  },
];

export const data: ChartData<'line'> = {
  labels,
  datasets,
};
