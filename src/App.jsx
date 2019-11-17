import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Detect from './Components/Detect';
import Violations from './Components/Violations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <Detect/>
        <Violations/>
      </header>
    </div>
  );
}

export default App;
