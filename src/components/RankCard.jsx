import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Rank = styled.div`
  font-size: 30px;
  font-weight: 500;
`

const Card = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 4px black;
  display: flex;
  flex: 1;
  gap: 20px;
  height: 100px;
  padding: 20px;
  position: relative;
`

const Image = styled.div`
  height: 59px;
  width: 59px;
`

const TextContainer = styled.div`
  align-items: flex-start;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
`

const UserName = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const Point = styled.div`
  font-size: 20px;
  font-weight: 300;
`

const RankCard = ({rank, image, username, point}) => {
  return (
    <Container>
      <Rank>{rank}</Rank>
      <Card>
        <Image>{image}</Image>
        <TextContainer>
          <UserName>{username}</UserName>
          <Point>{point}점</Point>
        </TextContainer>
      </Card>
    </Container>
  );
}

export default RankCard;