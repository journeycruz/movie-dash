/* eslint-disable react/prop-types */

import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: ` ${props.movieOne}`, // change label when hovering over data point
        data: props.datasetOne, // Array of 7 nums
        fill: true, // fill color underneath line: boolean
        backgroundColor: 'RGBA(159, 157, 155, 0.2)',
        borderColor: 'RGB(159, 157, 155)', // change color of line
        borderWidth: 2.5, // change thickness of line
        pointBackgroundColor: 'RGB(159, 157, 155)', // fill color of data point
        pointBorderWidth: 2.5, // change size of data point
        tension: 0.35 // change tension of line
      },
      {
        label: ` ${props.movieTwo}`,
        data: props.datasetTwo,
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
        display: false // legend display settings
      }
    }
  };

  return <Line data={data} options={options} width={495.5} height={189} />;
};

export default LineChart;
