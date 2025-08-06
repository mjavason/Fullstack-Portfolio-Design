'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { buildChartData } from './data';
import { options } from './options';

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function VisitorChart(props: { summary: IDashboardSummary }) {
  const { summary } = props;
  return (
    <div className="flex flex-col gap-3 items-center justify-between border-1 p-3 rounded-md">
      <div className="flex justify-between w-full mb-3">
        <h4 className="font-semibold text-lg text-primary">Visitors</h4>
        {/* <i className="fas fa-ellipsis-v cursor-pointer p-3"></i> */}
      </div>
      <Line options={options} data={buildChartData(summary.uniqueVisitors)}></Line>
    </div>
  );
}

export default VisitorChart;
