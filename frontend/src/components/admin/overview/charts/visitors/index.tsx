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
import { data } from './data';
import { options } from './options';

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function VisitorChart() {
  return (
    <div className="flex flex-col gap-3 items-center justify-between shadow-md p-3 rounded-md">
      <div className="flex justify-between w-full mb-3">
        <h4 className="font-semibold text-lg text-[#3E4B58]">Visitors</h4>
        <i className="fas fa-ellipsis-h cursor-pointer"></i>
      </div>
      <Line options={options} data={data}></Line>
    </div>
  );
}

export default VisitorChart;
