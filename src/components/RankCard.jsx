import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Rank = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-right: 20px;
  color: ${COLORS.grayblue};
`;

const Card = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  gap: 20px;
  height: 100px;
  padding: 20px;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Point = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const RankCard = ({ rank, username, point }) => {
  return (
    <Container>
      <Rank>{rank}</Rank>
      <Card>
        <TextContainer>
          <UserName>{username}</UserName>
          <Point>{point}점</Point>
        </TextContainer>
      </Card>
    </Container>
  );
};

export default RankCard;
