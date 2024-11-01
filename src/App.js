import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyChallenges from './pages/MyChallenges';
import ChallengeList from './pages/ChallengeList';
import MyPage from './pages/MyPage';
import UserRank from './pages/UserRank';
import NavBar from './components/NavBar';
import ChallengeDetail from './pages/ChallengeDetail';
import ChallengePhoto from './pages/ChallengePhoto';
import ChallengeCertification from './pages/ChallengeCertification';
import ChallengeDetailCompleted from './pages/ChallengeDetailCompleted';
import ChallengeReview from './pages/ChallengeReview';
import CreateChallenge from './pages/CreateChallenge';

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
        <Route path="/challenges/:id" element={<ChallengeDetail />} />
        <Route path="/challenge-photo/:id" element={<ChallengePhoto />} />
        <Route path="/challenges/:id/certification" element={<ChallengeCertification />} />
        <Route path="/challenges/:id/completed" element={<ChallengeDetailCompleted />} />
        <Route path="/challenges/:id/review" element={<ChallengeReview />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
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