/* eslint-disable react/prop-types */

import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ datasetOne, datasetTwo }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: ' Movie 1',
        data: datasetOne,
        fill: true,
        backgroundColor: 'RGBA(159, 157, 155, 0.2)',
        borderColor: 'RGB(159, 157, 155)',
        borderWidth: 2.5,
        pointBackgroundColor: 'RGB(159, 157, 155)',
        pointBorderWidth: 2.5,
        tension: 0.35
      },
      {
        label: ' Movie 2',
        data: datasetTwo,
        fill: true,
        backgroundColor: 'RGBA(79, 168, 6, 0.2)',
        borderColor: 'RGB(79, 168, 6)',
        borderWidth: 2.5,
        pointBackgroundColor: 'RGB(79, 168, 6)',
        pointBorderWidth: 2.5,
        tension: 0.35
      }
    ]
  };

  const options = {
    scales: {
      yAxis: {
        min: 20,
        max: 70,
        ticks: {
          stepSize: 10
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return <Line data={data} options={options} width={495.5} height={189} />;
};

export default LineChart;
