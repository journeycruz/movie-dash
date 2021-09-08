/* eslint-disable react/prop-types */

import React from 'react';

function PurchaseOption (props) {
  return (
    <div className='movie-container'>
      <div id='release-date'>
        <h1 className='po-text po-title'>{props.movie.movieName}</h1>
          <p className='po-text'>
            Release Date{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='clock-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            <span id='puchaseDate'>{props.movie.releaseDate}</span>
          </p>
      </div>
      <div className='flex-row buy-now' id='bottom-grey'>
        <p className='movie-date'>{props.movie.ticket1Date}</p>
        <a href={props.movie.ticket1URL} className='btn'>
          Buy Tickets
        </a>
      </div>
      <div className='flex-row buy-now'>
        <p className='movie-date'>{props.movie.ticket2Date}</p>
        <a href={props.movie.ticket2URL} className='btn'>
          Buy Tickets
        </a>
      </div>
    </div>
  );
}

export default PurchaseOption;
