import { accentPrimary, accentSecondary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

const gaugeValue = Math.random() * 100;
const labels = ['Projects', 'Posts'];
const data_ = [gaugeValue, 100 - gaugeValue];

const datasets: ChartDataset<'doughnut'>[] = [
  {
    data: data_,
    backgroundColor: [accentPrimary, accentSecondary],
    borderWidth: 0,
    weight: 80,
  },
];

export const data: ChartData<'doughnut'> = {
  labels,
  datasets,
};
