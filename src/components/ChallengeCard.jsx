import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 0 0 16px 0;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0;
`;

const DateText = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
`;

const ParticipantCount = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0 0 0;
  color: #333;
  text-align: right;
`;

const ChallengeCard = ({ title, description, startDate, endDate, participants }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DateText>{startDate} - {endDate}</DateText>
      <ParticipantCount>{participants}명 참가중</ParticipantCount>
    </CardContainer>
  );
};

export default ChallengeCard;
