import React from 'react';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';

const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  max-width: 480px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

const ChallengeList = styled.div`
  margin-bottom: 16px;
`;

const RouletteContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const RouletteImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #666;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #7e57c2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
`;

const HomePage = () => {
  const challenges = [
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다! 그림에 자신이 있다면 참여해보세요.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
    },
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다! 그림에 자신이 있다면 참여해보세요.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
    },
  ];

  return (
    <Container>
      <SectionTitle>진행 중인 챌린지</SectionTitle>
      <ChallengeList>
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            title={challenge.title}
            description={challenge.description}
            startDate={challenge.startDate}
            endDate={challenge.endDate}
            participants={challenge.participants}
          />
        ))}
      </ChallengeList>

      <SectionTitle>포인트 내기</SectionTitle>
      <RouletteContainer>
        <p>현재 나의 포인트: 108점</p>
        <RouletteImage>룰렛 이미지</RouletteImage>
        <p>내기에 걸 포인트를 입력해주세요!</p>
        <Button>돌려!</Button>
      </RouletteContainer>
    </Container>
  );
};

export default HomePage;
