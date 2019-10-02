import React from 'react';
import Calculator from './components/Calculator.js'
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <span className='headerTitle'>
          edible abacus
        </span>
      </div>
      <Calculator />
      <div
        className='footer'
      >
        <a
          className='githubLink'
          href='https://github.com/zroyer/edible-abacus'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span
            role='img'
            aria-label='taco'
          >
            Made with 🌮 in Austin, TX
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
