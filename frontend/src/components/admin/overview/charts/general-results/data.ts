import { darkBlue, lightBlue } from '@/config/constants/constants';
import { ChartData, ChartDataset } from 'chart.js';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dataValues = [65, 49, 39, 51, 20, 55, 40, 16, 51, 60, 70, 50];

const datasets: ChartDataset<'bar'>[] = [
  {
    label: 'Dataset',
    data: dataValues,
    backgroundColor: dataValues.map((value) => (value > 50 ? darkBlue : lightBlue)),
    borderColor: 'rgb(76, 162, 254)',
    borderWidth: 1,
    barThickness: 10, // Makes bars slimmer
    categoryPercentage: 0.6, // Adjusts bar width
    barPercentage: 0.8, // Adjusts bar width
  },
];

export const data: ChartData<'bar'> = {
  labels,
  datasets,
};
