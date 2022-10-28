import './App.css';
import { useState } from "react"
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

  return (
    <div className="App">
      <header className="header">
        <h1>Groceries</h1>
      </header>
      <div className='list'>
        {
          groceries.map((item, index) => (
            <Groceries item={item} key={index} index={index}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
