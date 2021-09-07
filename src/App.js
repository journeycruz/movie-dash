import { Component, React } from 'react';
import './styles/App.scss';

// Components
import InfoPanel from './components/InfoPanel';

// Data
import { dataset1 } from './data/Movies';

// Extra Dataset for presentation
// import { dataset2 } from './data/Movies';

const dataset = dataset1;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movieOne: dataset.movie1,
      movieTwo: dataset.movie2,
      location: dataset.location,
      update: dataset.lastUpdate
    };
  }

  render () {
    return (
      <main className='wrapper'>
        <section className='top-container'>
          <header className='info-card'>
            <InfoPanel
              movieOne={this.state.movieOne}
              movieTwo={this.state.movieTwo}
              location={this.state.location}
              update={this.state.update}
            />
          </header>
        </section>
        <section className='bottom-container'>
          <div className='movies'>{/* Purchase option */}</div>
          <div className='movies'>{/* Purchase option */}</div>
        </section>
      </main>
    );
  }
}

export default App;
