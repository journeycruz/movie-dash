/* eslint-disable react/prop-types */

import { React, useState } from 'react';

// Components
import InfoPanel from '../components/InfoPanel';
import MovieCard from '../components/Card/MovieCard';
import CardBase from '../components/Card/z-nested/CardBase';

function MovieCompDash ({ Data }) {
  const data = Data;
  const [dataset] = useState({
    movieOne: data.movie1,
    movieTwo: data.movie2,
    location: data.location,
    update: data.lastUpdate
  });
  return (
    <main className="wrapper">
      <CardBase
        content={
          <InfoPanel
            movieOne={dataset.movieOne}
            movieTwo={dataset.movieTwo}
            location={dataset.location}
            update={dataset.update}
          />
        }
      />
      <section className="bottom-container">
        <div className="movies">
          <MovieCard movie={dataset.movieOne} />
        </div>
        <div className="movies">
          <MovieCard movie={dataset.movieTwo} />
        </div>
      </section>
    </main>
  );
}

export default MovieCompDash;
