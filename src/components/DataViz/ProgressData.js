/* eslint-disable react/prop-types */

import React from 'react';

// Components
import ProgressBar from './ProgressBar';
import numberWithCommas from '../NumberWithCommas';

export default function ProgressData ({ name, number, pgBarVal, pgBarColor }) {
  return (
    <>
      <p className='stat-number'>
        {numberWithCommas(number)}
      </p>
      <p className='small-text stat-identifier'>
        Total Orders - {name}
      </p>
      <ProgressBar bgColor={pgBarColor} completed={pgBarVal} />
    </>
  );
}
