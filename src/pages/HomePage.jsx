import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/color';
import ChevronIcon from '../assets/icons/Chevron.svg';
import { Wheel } from 'react-custom-roulette';
import { get_user, put_user_point } from '../services/user';
import { getChallengeList } from '../services/Challenge';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 100px;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ChallengeList = styled.div`
  margin-bottom: 20px;
`;

const RouletteContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${COLORS.grayblue};
  border-radius: 100px;
  width: 200px;
  text-align: center;

  &::placeholder {
    font-size: 11px;
  }
`;

const HomePage = () => {
  const [inputPoint, setInputPoint] = useState('');
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [userPoints, setUserPoints] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();
  const userId = process.env.REACT_APP_USER_ID;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.error('User ID is not defined');
        return;
      }
      try {
        const data = await get_user(userId);
        console.log(data);
        if (data) {
          setUserPoints(data.point);
        } else {
          console.error('Invalid user data format:', data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchChallengeData = async () => {
      try {
        const data = await getChallengeList();
        setChallenges(data.slice(0, 2)); // 두 개의 챌린지만 가져오기
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    };

    fetchUserData();
    fetchChallengeData();
  }, [userId]);

  const handleInputChange = (e) => {
    setInputPoint(Number(e.target.value));
  };

  const handleButtonClick = () => {
    if (userPoints < inputPoint) {
      alert('포인트가 부족합니다.');
      return;
    }

    console.log(`입력된 포인트: ${inputPoint}`);
    console.log(`현재 포인트: ${userPoints}`);
    setPrizeNumber(Math.floor(Math.random() * data.length));
    setMustSpin(true);
  };

  const handleSpinEnd = async () => {
    setMustSpin(false);
    const multiplier = parseFloat(data[prizeNumber].option.replace('배', ''));
    const gainedPoints = inputPoint * multiplier;
    const newPoints = userPoints - inputPoint + gainedPoints;
    console.log(`새로운 포인트: ${newPoints}`);
    try {
      await put_user_point(userId, gainedPoints - inputPoint);
      setUserPoints(newPoints);
      console.log('User points updated successfully');
    } catch (error) {
      console.error('Failed to update user points:', error);
    }
  };

  // 룰렛 데이터
  const data = [
    { option: '2배' },
    { option: '1.5배' },
    { option: '1배' },
    { option: '0.75배' },
    { option: '0.5배' },
    { option: '0.25배' },
  ];

  return (
      <>
        <Header title="할래? 말래?" />
        <Container>
          <TitleContainer onClick={() => navigate('/challenges')}>
            <SectionTitle>진행 중인 챌린지</SectionTitle>
            <Icon src={ChevronIcon} alt="Chevron icon" />
          </TitleContainer>
          <ChallengeList>
            {challenges
                .filter((challenge) => !challenge.isCompleted)
                .map((challenge, index) => (
                    <ChallengeCard
                        key={index}
                        title={challenge.title}
                        description={challenge.description}
                        startDate={challenge.startDate}
                        endDate={challenge.endDate}
                        participants={challenge.participants}
                        image={challenge.image}
                        isCompleted={challenge.isCompleted}
                    />
                ))}
          </ChallengeList>

          <SectionTitle>포인트 내기</SectionTitle>
          <RouletteContainer>
            <p>현재 나의 포인트: {userPoints !== null ? `${userPoints}점` : '로딩 중...'}</p>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={handleSpinEnd}
                backgroundColors={[COLORS.grayblue, COLORS.mint]}
                textColors={[COLORS.white]}
                outerBorderWidth={8}
                innerRadius={20}
                radius={90}
                spinDuration={0.3}
            />
            <InputContainer>
              <Input
                  type="number"
                  placeholder="내기에 걸 포인트를 입력해주세요!"
                  value={inputPoint}
                  onChange={handleInputChange}
              />
              <Button text="돌릴래!" onClick={handleButtonClick} />
            </InputContainer>
          </RouletteContainer>
        </Container>
      </>
  );
};

export default HomePage;