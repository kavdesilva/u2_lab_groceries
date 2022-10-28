import './App.css';
import Groceries from './components/Groceries';

function App() {

  const groceries = [
    {
      item: 'bananas',
      brand: 'dole',
      units: '1',
      quantity: 4,
      isPurchased: false
    },
    {
      item: 'bread',
      brand: 'wonder',
      units: '1',
      quantity: 1,
      isPurchased: false
    },
    {
      item: 'peanut butter',
      brand: 'jif',
      units: '1',
      quantity: 1,
      isPurchased: false
    }
  ]

  const handleClick = (i) => {
    groceries[i].isPurchased = true
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Groceries</h1>
      </header>
      <main>
        <Groceries groceries={groceries} handleClick={handleClick}/>
      </main>
    </div>
  );
}

export default App;
