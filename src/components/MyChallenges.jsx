import React from 'react';
import ChallengeCard from '../components/ChallengeCard';

const MyChallenges = () => {
  const challenges = [
    {
      id: 1,
      image: '/path/to/image1.png', // 실제 이미지 경로로 변경
      title: '개구리 귀엽게 그리기 할래?',
      date: '24.10.15 - 24.11.15',
      isCompleted: false,
    },
    {
      id: 2,
      image: '/path/to/image2.png', // 실제 이미지 경로로 변경
      title: '개구리 귀엽게 그리기 할래?',
      date: '24.10.15 - 24.11.15',
      isCompleted: true, 
    },
  ];

  return (
    <div>
      <h2>진행 중인 챌린지</h2>
      {challenges
        .filter((challenge) => !challenge.isCompleted)
        .map((challenge) => (
          <ChallengeCard key={challenge.id} {...challenge} />
        ))}
      <h2>완료한 챌린지</h2>
      {challenges
        .filter((challenge) => challenge.isCompleted)
        .map((challenge) => (
          <ChallengeCard key={challenge.id} {...challenge} />
        ))}
    </div>
  );
};

export default MyChallenges;