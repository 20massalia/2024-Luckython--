import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  text-align: center;
  padding-bottom: 60px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${COLORS.lightGray};
  margin: 0 auto 20px;
`;

const UserName = styled.h2`
  font-size: 20px;
  color: ${COLORS.grayblue};
  margin: 0 0 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
`;

const StatIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" />
      <Container>
        <ProfileImage />
        <UserName>개구리님</UserName>
        <StatsContainer>
          <StatItem>
            <StatIcon>🏅</StatIcon>
            <span>포인트</span>
            <strong>1029점</strong>
          </StatItem>
          <StatItem>
            <StatIcon>⭐</StatIcon>
            <span>참여중</span>
            <strong>3개</strong>
          </StatItem>
          <StatItem>
            <StatIcon>✅</StatIcon>
            <span>완료한 챌린지</span>
            <strong>10개</strong>
          </StatItem>
        </StatsContainer>
      </Container>
      <NavBar />
    </>
  );
};

export default MyPage;