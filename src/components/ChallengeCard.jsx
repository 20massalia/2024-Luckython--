import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

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
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: inherit;
`;

const Description = styled.p`
  font-size: 14px;
  color: inherit;
  margin: 8px 0;
`;

const DateText = styled.p`
  font-size: 12px;
  color: inherit;
  margin: 0;
`;

const ParticipantCount = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0 0 0;
  color: inherit;
  text-align: right;
`;

const ChallengeCard = ({ image, title, description, startDate, endDate, participants, isCompleted }) => {
  return (
    <CardContainer isCompleted={isCompleted}>
      <Image src={image} alt={`${title} 이미지`} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DateText>{startDate} - {endDate}</DateText>
        <ParticipantCount>{participants}명 참가중</ParticipantCount>
      </Content>
    </CardContainer>
  );
};

export default ChallengeCard;