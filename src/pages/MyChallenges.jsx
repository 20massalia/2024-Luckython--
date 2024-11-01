import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import { COLORS } from '../utils/color';
import { useNavigate } from 'react-router-dom';
import { getChallengesByUser } from '../services/Challenge';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

const ChallengeList = styled.div`
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  background-color: ${COLORS.mint};
  color: ${COLORS.black};
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
`;

const MyChallenges = () => {
  const navigate = useNavigate();
  const [ongoingChallenges, setOngoingChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const userId = process.env.REACT_APP_USER_ID; // Fetch the userId from environment variables

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const data = await getChallengesByUser(userId);
        const ongoing = data.filter((challenge) => !challenge.isCompleted);
        const completed = data.filter((challenge) => challenge.isCompleted);
        setOngoingChallenges(ongoing);
        setCompletedChallenges(completed);
      } catch (error) {
        console.error('Failed to fetch user challenges:', error);
      }
    };

    fetchChallenges();
  }, [userId]);

  const handleCreateChallenge = () => {
    navigate('/create-challenge');
  };

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

          <CreateButton onClick={handleCreateChallenge}>+ 챌린지 생성하기</CreateButton>
        </Container>
      </>
  );
};

export default MyChallenges;