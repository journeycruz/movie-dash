/* eslint-disable react/prop-types */
import React from 'react';

export default function DateHorizontal ({ date }) {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='clock-2'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2.5}
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>{' '}
      <span id='releaseDate'>{date}</span>
    </>
  );
}
