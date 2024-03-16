import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing-page/Landing';
import './App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
