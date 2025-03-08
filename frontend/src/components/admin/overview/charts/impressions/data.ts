import { accentPrimary, accentSecondary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

const gaugeValue = 75; // Adjust this value dynamically if needed

const datasets: ChartDataset<'doughnut'>[] = [
  {
    data: [gaugeValue, 100 - gaugeValue], // Gauge value and remaining part
    backgroundColor: [accentPrimary, accentSecondary], // Gauge color and faded background
    borderWidth: 0,
    weight: 80, // Adjust thickness
  },
];

export const data: ChartData<'doughnut'> = {
  datasets,
};
