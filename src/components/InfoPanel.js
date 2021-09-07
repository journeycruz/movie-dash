/* eslint-disable react/prop-types */

import React from 'react';
import '../styles/App.scss';

import LineChart from './LineChart';

const InfoPanel = (props) => {
  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div className='graph-container'>
      <div className='section-header'>
        <div>
          <h1 className='graph-text title'>Total Movie Sales</h1>
          <p id='sub-title' className='graph-text'>
            Comparison - {props.movieOne.movieName} and {props.movieTwo.movieName}
          </p>
        </div>
        <div className='right-align'>
          <p className='graph-text'>
            Average value of sales in the past month in:{' '}
            <strong>{props.location}</strong>
          </p>
          <p className='graph-text'>All sales: {numberWithCommas(props.movieOne.totalOrders + props.movieTwo.totalOrders)}</p>
        </div>
      </div>
      <div className='stats-row'>
        <div className='graph'>
          <LineChart datasetOne={props.movieOne.data} datasetTwo={props.movieTwo.data}/>
        </div>
        <div>
          <div className='stat-1'>
            <p className='stat-number'>{numberWithCommas(props.movieOne.yearlyOrders)}</p>
            <p className='stat-identifier'>Total Orders - Movie 1</p>
            progress bar
          </div>
          <div className='stat-2'>
            <p className='stat-number'>{numberWithCommas(props.movieTwo.yearlyOrders)}</p>
            <p className='stat-identifier'>Total Orders - Movie 2</p>
            progress bar
          </div>
        </div>
      </div>
      <div className='section-header'>
        <div id='no-margin'>
          <h3 id='analysis'>Analysis of Sales:</h3>
          <p id='analysis-text'>
            The value has been changed over time, and last month reached a level
            over ${numberWithCommas(props.movieOne.monthlyRevenue + props.movieTwo.monthlyRevenue)}
          </p>
        </div>
        <div id='new-update'>
          <p id='update' className='right-align'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='clock'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Update on {props.update}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
