import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyChallenges from './pages/MyChallenges';
import ChallengeList from './pages/ChallengeList'
import MyPage from './pages/MyPage';
import UserRank from './pages/UserRank';
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();
  const showNavBar = ['/', '/rank', '/mychallenges', '/mypage'];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rank" element={<UserRank />} />
        <Route path="/mychallenges" element={<MyChallenges />} />
        <Route path="/challenges" element={<ChallengeList />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>

      {showNavBar.includes(location.pathname) && <NavBar />}
    </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}