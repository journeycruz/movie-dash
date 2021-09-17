/* eslint-disable react/prop-types */

import React from 'react';
import DateHorizontal from './DateHorizontal';

export default function ReleaseDateHorizontal ({ date }) {
  return (
      <p>
        <span id='rd-title'>Release Date </span>
        <DateHorizontal date={date} />
      </p>
  );
}
