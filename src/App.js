import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowWorks from './components/HowWorks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HowWorks />
    </div>
  );
}

export default App;
