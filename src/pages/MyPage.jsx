import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { COLORS } from '../utils/color';
import PointIcon from '../assets/icons/Point.svg';
import StarIcon from '../assets/icons/Star.svg';
import CheckedIcon from '../assets/icons/Checked.svg';
import { get_user } from '../services/user';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 40px;
  color: ${COLORS.grayblue};
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 480px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const MyPage = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const userId = process.env.REACT_APP_USER_ID; // Fetch the userId from environment variables

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await get_user(userId); // Call the get_user function to fetch data
        setUserData(data); // Set the data to the state
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userId]); // Dependency array includes userId

  // If userData is not yet loaded, display a loading message
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header title="마이페이지" />
      <Container>
        <UserName>{userData.username}님</UserName>
        <StatsContainer>
          <StatItem>
            <Icon src={PointIcon} alt="Point icon" />
            <span>포인트</span>
            <strong>{userData.point}점</strong>
          </StatItem>
          <StatItem>
            <Icon src={StarIcon} alt="Star icon" />
            <span>참여중</span>
            <strong>{userData.participation}개</strong>
          </StatItem>
          <StatItem>
            <Icon src={CheckedIcon} alt="Checked icon" />
            <span>완료한 챌린지</span>
            <strong>{userData.success}개</strong>
          </StatItem>
        </StatsContainer>
      </Container>
    </>
  );
};

export default MyPage;