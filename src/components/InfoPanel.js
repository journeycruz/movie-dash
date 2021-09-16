/* eslint-disable react/prop-types */

import React from 'react';
import '../App.scss';

// Components
import LineChart from './LineChart';
import ProgressBar from './ProgressBar';
import numberWithCommas from './NumberWithCommas';

const InfoPanel = (props) => {
  return (
    <div className='graph-container'>
      <div className='section-header'>
        <div>
          <h1 className='no-space title'>Total Movie Sales</h1>
          <p id='sub-title' className='no-space general-text'>
            Comparison - {props.movieOne.name} and{' '}
            {props.movieTwo.name}
          </p>
        </div>
        <div className='right-align'>
          <p className='no-space general-text'>
            Average value of sales in the past month in:{' '}
            <strong>{props.location}</strong>
          </p>
          <p className='no-space'>
            All sales:{' '}
            {numberWithCommas(
              props.movieOne.totalOrders + props.movieTwo.totalOrders
            )}
          </p>
        </div>
      </div>
      <div className='stats-row'>
        <div className='graph'>
          <LineChart
            datasetOne={props.movieOne.data}
            datasetTwo={props.movieTwo.data}
            movieOne={props.movieOne.name}
            movieTwo={props.movieTwo.name}
          />
        </div>
        <div>
          <div className='stat-one'>
            <p className='stat-number'>
              {numberWithCommas(props.movieOne.yearlyOrders)}
            </p>
            <p className='small-text stat-identifier'>Total Orders - {props.movieOne.name}</p>
            <ProgressBar
              bgColor='#7F7D79'
              completed={props.movieOne.pgBarVal}
            />
          </div>
          <div className='stat-two'>
            <p className='stat-number'>
              {numberWithCommas(props.movieTwo.yearlyOrders)}
            </p>
            <p className='small-text stat-identifier'>Total Orders - {props.movieTwo.name}</p>
            <ProgressBar
              bgColor='#4FA806'
              completed={props.movieTwo.pgBarVal}
            />
          </div>
        </div>
      </div>
      <div className='section-header'>
        <div>
          <h3 className='analysis-semi no-space'>Analysis of Sales:</h3>
          <p className=' no-space general-text'>
            The value has been changed over time, and last month reached a level
            over $
            {numberWithCommas(
              props.movieOne.monthlyRevenue + props.movieTwo.monthlyRevenue
            )}
          </p>
        </div>
        <div id='update-div'>
          <p id='update-text' className='right-align small-text'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='clock'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.75}
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
