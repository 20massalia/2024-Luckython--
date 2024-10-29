import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import RankCard from '../components/RankCard';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  text-align: center;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const UserRank = () => {
  const userRankData = [
    { userId: 4, username: 'Kim4', point: 600, rank: 1 },
    { userId: 1, username: 'Kim1', point: 500, rank: 2 },
    { userId: 2, username: 'Kim2', point: 200, rank: 3 },
    { userId: 3, username: 'Kim3', point: 100, rank: 4 },
  ];

  return (
    <>
      <Header title="유저 랭크" />
      <Container>
        {userRankData.map((user) => (
          <RankCard
            key={user.userId}
            rank={user.rank}
            username={user.username}
            point={user.point}
          />
        ))}
      </Container>
    </>
  );
};

export default UserRank;
