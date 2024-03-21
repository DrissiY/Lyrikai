import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing-page/Landing';
import './App.css'
import Signup from './pages/Signup-page/Signup';

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
