import { accentPrimary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

export function buildChartData(data_: { data: number[]; labels: string[] }): ChartData<'line'> {
  const datasets: ChartDataset<'line'>[] = [
    {
      label: 'Unique Visitors',
      data: data_.data,
      fill: false,
      borderColor: accentPrimary,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ];

  return {
    labels: data_.labels,
    datasets,
  };
}
