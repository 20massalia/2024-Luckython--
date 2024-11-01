import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import RankCard from '../components/RankCard';
import { COLORS } from '../utils/color';
import { get_ranking } from '../services/rank';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  text-align: center;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const UserRank = () => {
  const [userRankData, setUserRankData] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data = await get_ranking();
        const rankedData = data.map((user, index) => ({
          ...user,
          rank: index + 1,
        }));
        setUserRankData(rankedData);
      } catch (error) {
        console.error("Error fetching ranking data:", error);
      }
    };
    fetchRanking();
  }, []);

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