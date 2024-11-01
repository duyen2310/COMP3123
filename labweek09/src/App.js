import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './Greeting'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting/>
      </header>
    </div>
  );
}

export default App;
