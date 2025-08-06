import { accentPrimary, accentSecondary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

export function projectVsPostClicksData(data_: {
  labels: string[];
  data: number[];
}): ChartData<'doughnut'> {
  const datasets: ChartDataset<'doughnut'>[] = [
    {
      data: data_.data,
      backgroundColor: [accentPrimary, accentSecondary],
      borderWidth: 0,
      weight: 80,
    },
  ];

  return {
    labels: data_.labels,
    datasets,
  };
}
