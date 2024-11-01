import React from 'react';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import { COLORS } from '../utils/color';
import { put_user_point } from '../services/user';

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

const handleChallengePointUpdate = async (userId, point) => {
  try {
    await put_user_point(userId, point);
    alert('Points updated for this challenge!');
  } catch (error) {
    console.error('Failed to update points:', error);
  }
};

const MyChallenges = ({ userId, challenges }) => (
  <Container>
    <Header />
    <SectionTitle>My Challenges</SectionTitle>
    {(challenges && challenges.length > 0) ? (
      challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          isCompleted={challenge.isCompleted}
          userId={userId}
          point={challenge.point}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
        />
      ))
    ) : (
      <p>No challenges available</p>
    )}
  </Container>
);

export default MyChallenges;