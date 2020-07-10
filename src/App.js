import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowWorks from './components/HowWorks';
import Subscribe from './components/Subscribe';
import Plans from './components/Plans';
import Subscribe2 from './components/Subscribe2';
import Support from './components/Support';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HowWorks />
      <Subscribe />
      <Plans />
      <Subscribe2 />
      <Support />
    </div>
  );
}

export default App;
