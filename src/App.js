//App.js 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
// ...import other components as needed...

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomeComponent />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


