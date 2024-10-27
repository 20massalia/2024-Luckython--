import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChallengeList from './pages/ChallengeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="challenges" element={<ChallengeList />} />
      </Routes>
    </Router>
  );
}

export default App;
