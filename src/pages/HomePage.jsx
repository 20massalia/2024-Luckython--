import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import Button from '../components/Button';
import { COLORS } from '../utils/color';
import { get_challenge_list } from '../services/challenge'; 
import ChevronIcon from '../assets/icons/Chevron.svg';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
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
`;

const RouletteImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #666;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${COLORS.grayblue};
  border-radius: 100px;
  width: 300px;
  text-align: center;

  &::placeholder {
    font-size: 11px;
  }
`;

const HomePage = () => {
  const [inputPoint, setInputPoint] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputPoint(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(`입력된 포인트: ${inputPoint}`);
    // API
  };

  // const [challenges, setChallenges] = useState([]);

  // useEffect(() => {
  //   const fetchChallenges = async () => {
  //     try {
  //       const data = await get_challenge_list();
  //       setChallenges(data);
  //     } catch (error) {
  //       console.error('Failed to fetch challenges', error);
  //     }
  //   };

  //   fetchChallenges();
  // }, []);

  const challenges = [
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다! 그림에 자신이 있다면 참여해보세요.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
    },
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다! 그림에 자신이 있다면 참여해보세요.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
    },
  ];

  return (
    <>
      <Header title={"할래? 말래?"}/>
      <Container>
        <TitleContainer onClick={() => {navigate(`challenges`);}}>
          <SectionTitle>진행 중인 챌린지</SectionTitle>
          <Icon src={ChevronIcon} alt="Chevron icon" />
        </TitleContainer>
        <ChallengeList>
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participants={challenge.participants}
            />
          ))}
        </ChallengeList>

        <SectionTitle>포인트 내기</SectionTitle>
        <RouletteContainer>
          <p>현재 나의 포인트: 108점</p>
          <RouletteImage>룰렛 이미지</RouletteImage>
          <InputContainer>
            <Input 
              type="number" 
              placeholder="내기에 걸 포인트를 입력해주세요!" 
              value={inputPoint} 
              onChange={handleInputChange} 
            />
            <Button text={"돌릴래!"} onClick={handleButtonClick}/>
          </InputContainer>
        </RouletteContainer>
      </Container>
    </>
  );
};

export default HomePage;
