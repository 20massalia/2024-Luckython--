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

const ChallengeList = styled.div`
  margin-bottom: 20px;
`;

const MyChallenges = () => {
  const ongoingChallenges = [
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다!",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
      daysLeft: 3,
      isCompleted: false,
    },
    {
      title: "하루 만보 걷기 챌린지",
      description: "건강을 위해 하루에 만보 걷기를 목표로 합니다.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 800,
      daysLeft: 10,
      isCompleted: false,
    },
  ];

  const completedChallenges = [
    {
      title: "물 마시기 챌린지",
      description: "물을 매일 규칙적으로 마시는 챌린지입니다.",
      startDate: "24.09.01",
      endDate: "24.09.30",
      participants: 500,
      isCompleted: true,
    },
  ];

  return (
    <>
      <Header title="나의 챌린지" />
      <Container>
        <SectionTitle>진행 중인 챌린지</SectionTitle>
        <ChallengeList>
          {ongoingChallenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participants={challenge.participants}
              isCompleted={challenge.isCompleted}
              daysLeft={challenge.daysLeft}
            />
          ))}
        </ChallengeList>

        <SectionTitle>완료한 챌린지</SectionTitle>
        <ChallengeList>
          {completedChallenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participants={challenge.participants}
              isCompleted={challenge.isCompleted}
            />
          ))}
        </ChallengeList>
      </Container>
      <NavBar />
    </>
  );
};

export default MyChallenges;