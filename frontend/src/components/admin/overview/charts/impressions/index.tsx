'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { options } from './options';
import { projectVsPostClicksData } from './data';

Chartjs.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

function ImpressionsChart(props: { summary: IDashboardSummary }) {
  const { summary } = props;
  return (
    <div className="w-full border-1 col-span-2 md:col-span-1 flex flex-col justify-between rounded-md">
      <div className="flex justify-center w-full mb-3 p-3">
        <h4 className="font-semibold text-lg text-primary">Impressions</h4>
      </div>
      <Doughnut
        data={projectVsPostClicksData(summary.projectVsPostClicks)}
        options={options}
      ></Doughnut>
    </div>
  );
}

export default ImpressionsChart;
