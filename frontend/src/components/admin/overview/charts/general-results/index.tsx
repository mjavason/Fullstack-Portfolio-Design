'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { contentClicksChartDataBuilder } from './data';
import { options } from './options';

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GeneralResultsChart(props: { summary: IDashboardSummary }) {
  const { summary } = props;

  return (
    <div className="flex flex-col justify-between col-span-2 w-full border-1 rounded-md">
      <div className="flex justify-between w-full mb-3 p-3">
        <h4 className="font-semibold text-lg text-primary">Content Clicks</h4>
      </div>
      <Bar data={contentClicksChartDataBuilder(summary.contentClicks)} options={options}></Bar>
    </div>
  );
}

export default GeneralResultsChart;
