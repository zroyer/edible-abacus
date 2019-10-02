import React from 'react';
import Calculator from './components/Calculator.js'
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <span className='headerTitle'>
          Edible Abacus
        </span>
      </div>
      <Calculator />
      <div
        className='footer'
      >
        <span
          role='img'
          aria-label='taco'
        >
          Made with 🌮 in Austin, TX
        </span>
      </div>
    </>
  );
}

export default App;
