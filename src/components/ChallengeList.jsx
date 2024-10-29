import React from 'react';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

const ChallengeList = () => {
  const challenges = [
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
    },
    {
      title: "하루 만보 걷기 챌린지",
      description: "건강을 위해 하루에 만보 걷기를 목표로 합니다.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 800,
    },
  ];

  return (
    <>
      <Header title="진행 중인 챌린지" />
      <Container>
        <SectionTitle>진행 중인 챌린지</SectionTitle>
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
      </Container>
      <NavBar />
    </>
  );
};

export default ChallengeList;