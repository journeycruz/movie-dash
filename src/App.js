import StatChart from "./components/StatChart";
import PurchaseOption from "./components/PurchaseOption";
import "./styles/App.scss";

function App() {
  return (
    <main className='wrapper'>
      <section className='top-container'>
        <header className='graph'>
          <StatChart />
        </header>
      </section>
      <section className='bottom-container'>
        <div className='movies movie-a'>
          <PurchaseOption title='Movie 1' />
        </div>
        <div className='movies movie-b'>
          <PurchaseOption title='Movie 2' />
        </div>
      </section>
    </main>
  );
}

export default App;
