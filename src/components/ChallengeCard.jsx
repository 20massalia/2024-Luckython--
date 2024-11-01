import React from 'react'; 
import styled from 'styled-components';
import { COLORS } from '../utils/color';
import { put_user_point } from '../services/user';

const CardContainer = styled.div`
  width: 100%;
  height: 180px;
  padding: 16px 25px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ isCompleted }) => (isCompleted ? COLORS.grayblue : 'white')};
  color: ${({ isCompleted }) => (isCompleted ? 'white' : 'black')};
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 12px 0;
  color: ${({ isCompleted }) => (isCompleted ? 'white' : 'gray')};
`;

const DateText = styled.span`
  font-size: 12px;
  color: ${({ isCompleted }) => (isCompleted ? 'white' : COLORS.gray)};
`;

const ParticipantsText = styled.span`
  font-size: 12px;
  color: ${({ isCompleted }) => (isCompleted ? 'white' : COLORS.gray)};
  font-weight: bold;
`;

const handlePointUpdate = async (userId, point) => {
  try {
    await put_user_point(userId, point);
    alert('Points updated successfully!');
  } catch (error) {
    console.error('Failed to update points:', error);
  }
};

const ChallengeCard = ({ 
  isCompleted, 
  userId, 
  point, 
  title, 
  description, 
  imageUrl, 
  startDate, 
  endDate, 
  participants 
}) => (
  <CardContainer isCompleted={isCompleted} onClick={() => handlePointUpdate(userId, point)}>
    <Image src={imageUrl} alt="challenge image" />
    <InfoContainer>
      <Title>{title}</Title>
      <Description isCompleted={isCompleted}>{description}</Description>
      <DateText isCompleted={isCompleted}>{startDate} - {endDate}</DateText>
      <ParticipantsText isCompleted={isCompleted}>{participants}명 참가중</ParticipantsText>
    </InfoContainer>
  </CardContainer>
);

export default ChallengeCard;