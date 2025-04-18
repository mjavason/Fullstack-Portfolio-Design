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
import { data } from './data';
import { options } from './options';

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GeneralResultsChart() {
  return (
    <div className="flex flex-col justify-between col-span-2 w-full border-1 rounded-md">
      <div className="flex justify-between w-full mb-3 p-3">
        <h4 className="font-semibold text-lg text-primary">General Results</h4>
      </div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default GeneralResultsChart;
