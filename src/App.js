import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RankPage from './pages/RankPage';
import MyChallenges from './pages/MyChallenges';
import ChallengeList from './pages/ChallengeList'
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rank" element={<RankPage />} />
        <Route path="mychallenges" element={<MyChallenges />} />
        <Route path="/challenges" element={<ChallengeList />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;