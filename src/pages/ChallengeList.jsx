import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const ChallengeListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        image: '/path/to/image.png',
        title: "개구리 귀엽게 그리기 할래?",
        description: "개구리를 귀엽게 그리는 챌린지입니다.",
        startDate: "24.10.15",
        endDate: "24.11.15",
        participants: 1000,
        reward: "100포인트",
        reviews: [
          { id: 1, text: "제가 그린 개구리인데 예쁘죠?", date: "2024.11.01 23:01" },
          { id: 2, text: "도전해보세요! 재밌습니다!", date: "2024.11.02 14:15" },
        ],
      },
      {
        id: 2,
        image: '/path/to/image.png',
        title: "하루 만보 걷기 할래?",
        description: "건강을 위해 하루에 만보 걷기를 목표로 합니다.",
        startDate: "24.10.15",
        endDate: "24.11.15",
        participants: 800,
        reward: "50포인트",
        reviews: [
          { id: 1, text: "도전해보세요! 정말 건강에 좋아요.", date: "2024.11.01 23:05" },
        ],
      },
    ];
    setChallenges(dummyData);
  }, []);

  const handleChallengeClick = (challenge) => {
    navigate(`/challenges/${challenge.id}`, { state: challenge, replace: true });
    localStorage.setItem(`challenge-${challenge.id}`, JSON.stringify(challenge));
  };

  return (
    <>
      <Header title="진행 중인 챌린지" />
      <Container>
        <ChallengeListContainer>
          {challenges.map((challenge) => (
            <div key={challenge.id} onClick={() => handleChallengeClick(challenge)}>
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                startDate={challenge.startDate}
                endDate={challenge.endDate}
                participants={challenge.participants}
                image={challenge.image}
                isCompleted={challenge.isCompleted}
              />
            </div>
          ))}
        </ChallengeListContainer>
      </Container>
    </>
  );
};

export default ChallengeList;