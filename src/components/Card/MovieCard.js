/* eslint-disable react/prop-types */

import React from 'react';
import Button from '../Button';
import ReleaseDateHorizontal from '../LabelValuePair/ReleaseDateHorizontal.js.js';

export default function MovieCard ({ movie }) {
  return (
    <div className="movie-container">
      <div id="release-date">
        <h1 className="po-text po-title">{movie.name}</h1>
        <ReleaseDateHorizontal date={movie.releaseDate} />
      </div>
      <div className="flex-row buy-now" id="bottom-grey">
        <p className="movie-date">{movie.ticket1Date}</p>
        <Button url={movie.ticket1URL} />
      </div>
      <div className="flex-row buy-now">
        <p className="movie-date">{movie.ticket2Date}</p>
        <Button url={movie.ticket2URL} />
      </div>
    </div>
  );
}
