import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowWorks from './components/HowWorks';

import PruebaSuscripcion from './components/PruebaSuscripcion';
import Plans from './components/Plans';

import PruebaSuscripcion2 from './components/PruebaSuscripcion2';
import Support from './components/Support';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HowWorks />    
      <PruebaSuscripcion />
      <Plans />      
       <PruebaSuscripcion2 />
      <Support />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
