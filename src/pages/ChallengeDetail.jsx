import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeHeader from '../components/ChallengeHeader';
import { COLORS } from '../utils/color';
import Button from '../components/Button';
import { getChallengesByUser } from '../services/Challenge';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
`;

const ChallengeInfo = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0 0 10px 0;
`;

const DateText = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0 0 10px 0;
`;

const Reward = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const data = await getChallengesByUser(id);
        setChallenge(data);
      } catch (error) {
        console.error("Failed to fetch challenge:", error);
      }
    };
    fetchChallenge();
  }, [id]);

  const handleJoinClick = () => {
    const confirmed = window.confirm('참여하시겠습니까?');
    
    if (confirmed) {
      navigate(`/challenge-photo/${id}`, { state: challenge });
    } else {
      alert('이걸 빼?');
    }
  };

  if (!challenge) {
    return <Container>해당 챌린지의 정보를 찾을 수 없습니다.</Container>;
  }

  return (
    <>
      <ChallengeHeader title={challenge.title} />
      <Container>
        <ChallengeInfo>
          <Title>{challenge.title}</Title>
          <Description>{challenge.content}</Description>
          <DateText>{challenge.startDate} - {challenge.endDate}</DateText>
          <Reward>보상: {challenge.prize}</Reward>
          <Button text="할래!" onClick={handleJoinClick} />
        </ChallengeInfo>
      </Container>
    </>
  );
};

export default ChallengeDetail;