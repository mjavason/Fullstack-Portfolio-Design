import { accentPrimary, accentSecondary } from '@/config/constants';
import { ChartData, ChartDataset } from 'chart.js';

export function contentClicksChartDataBuilder(data_: {
  labels: string[];
  dataValues: number[];
}): ChartData<'bar'> {
  const datasets: ChartDataset<'bar'>[] = [
    {
      label: 'Content Clicks',
      data: data_.dataValues,
      backgroundColor: data_?.dataValues?.map((value) =>
        value > 50 ? accentPrimary : accentSecondary,
      ),
      borderWidth: 1,
      barThickness: 10, // Makes bars slimmer
      categoryPercentage: 0.6, // Adjusts bar width
      barPercentage: 0.8, // Adjusts bar width
    },
  ];

  return {
    labels: data_.labels,
    datasets,
  };
}
