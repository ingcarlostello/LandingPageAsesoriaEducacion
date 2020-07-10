import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowWorks from './components/HowWorks';
// import Subscribe from './components/Subscribe';
import PruebaSuscripcion from './components/PruebaSuscripcion';
import Plans from './components/Plans';
// import Subscribe2 from './components/Subscribe2';
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
      {/* <Subscribe /> */}
      <PruebaSuscripcion />
      <Plans />
      {/* <Subscribe2 /> */}
       <PruebaSuscripcion2 />
      <Support />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
