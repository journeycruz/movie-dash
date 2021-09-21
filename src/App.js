import { React } from 'react';
import './App.scss';

// Data
import { dataset1 } from './data/Movies';
import MovieCompDash from './pages/MovieCompDash';

const App = () => {
  return (
    <MovieCompDash Data={dataset1} />
  );
};

export default App;
