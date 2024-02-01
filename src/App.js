//App.js 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PortfolioComponent from './components/gbm/PortfolioComponent';
import Contact from './components/gbm/Contact';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomeComponent />} />
        
		<Route path="/portfolio" element={<PortfolioComponent />} />
		<Route path="/contact" element={<Contact />} />
		
		
      </Routes>
    </Router>
  );
}

export default App;


