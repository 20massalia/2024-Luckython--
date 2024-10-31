import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/color';
import ChevronIcon from '../assets/icons/Chevron.svg';
import { Wheel } from 'react-custom-roulette';

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
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputPoint(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(`입력된 포인트: ${inputPoint}`);
    // API
    setPrizeNumber(Math.floor(Math.random() * data.length));
    setMustSpin(true);
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
      image: "/path/to/image1.png",
      isCompleted: false,
    },
    {
      title: "하루 만보 걷기 챌린지",
      description: "건강을 위해 하루에 만보 걷기를 목표로 합니다.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 800,
      image: "/path/to/image2.png",
      isCompleted: false,
    },
  ];

  // 룰렛 데이터
  const data = [
    { option: '100' },
    { option: '200' },
    { option: '300' },
    { option: '500' },
    { option: '1000' },
    { option: '2000' },
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
          <p>현재 나의 포인트: 108점</p>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => setMustSpin(false)}
            backgroundColors={[COLORS.grayblue, COLORS.mint]}
            textColors={[COLORS.white]}
            outerBorderWidth={8}
            innerRadius={20}
            radius={90}
            spinDuration = {0.3}
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