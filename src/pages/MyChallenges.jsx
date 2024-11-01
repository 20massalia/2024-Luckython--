// import React from 'react';
// import styled from 'styled-components';
// import ChallengeCard from '../components/ChallengeCard';
// import Header from '../components/Header';
// import { COLORS } from '../utils/color';
// import { put_user_point } from '../services/user';

// const Container = styled.div`
//   padding: 20px;
//   background-color: ${COLORS.gray};
//   box-sizing: border-box;
//   padding-bottom: 60px;
//   min-height: 100vh;
// `;

// const SectionTitle = styled.h2`
//   font-size: 25px;
//   font-weight: bold;
//   margin: 16px 0 8px;
// `;

// const handleChallengePointUpdate = async (userId, point) => {
//   try {
//     await put_user_point(userId, point);
//     alert('Points updated for this challenge!');
//   } catch (error) {
//     console.error('Failed to update points:', error);
//   }
// };

// const MyChallenges = ({ userId, challenges }) => (
//   <Container>
//     <Header />
//     <SectionTitle>My Challenges</SectionTitle>
//     {challenges.map((challenge) => (
//       <ChallengeCard
//         key={challenge.id}
//         isCompleted={challenge.isCompleted}
//         userId={userId}
//         point={challenge.point}
//         title={challenge.title}
//         description={challenge.description}
//         imageUrl={challenge.imageUrl}
//       />
//     ))}
//   </Container>
// );

// export default MyChallenges;

import React, { useState } from 'react';
import styled from 'styled-components';
import ChallengeCard from '../components/ChallengeCard';
import Header from '../components/Header';
import { COLORS } from '../utils/color';
import { Wheel } from 'react-custom-roulette';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

const ChallengeList = styled.div`
  margin-bottom: 20px;
`;

const RouletteContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const ResultText = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const MyChallenges = () => {
  const ongoingChallenges = [
    {
      title: "개구리 귀엽게 그리기 챌린지",
      description: "개구리를 귀엽게 그리는 챌린지입니다!",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 1000,
      daysLeft: 3,
      isCompleted: false,
    },
    {
      title: "하루 만보 걷기 챌린지",
      description: "건강을 위해 하루에 만보 걷기를 목표로 합니다.",
      startDate: "24.10.15",
      endDate: "24.11.15",
      participants: 800,
      daysLeft: 10,
      isCompleted: false,
    },
  ];

  const completedChallenges = [
    {
      title: "물 마시기 챌린지",
      description: "물을 매일 규칙적으로 마시는 챌린지입니다.",
      startDate: "24.09.01",
      endDate: "24.09.30",
      participants: 500,
      isCompleted: true,
    },
  ];

  const [rouletteData] = useState([
    { option: 100 },
    { option: 200 },
    { option: 300 },
    { option: 500 },
    { option: 1000 },
    { option: 2000 },
  ]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [betPoints, setBetPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(108); // 초기 포인트 설정

  const onStartRoulette = () => {
    const newPrizeNumber = Math.floor(Math.random() * rouletteData.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleBetPointsChange = (e) => {
    setBetPoints(parseInt(e.target.value) || 0);
  };

  const onRouletteStop = () => {
    setMustSpin(false);
    const wonPoints = rouletteData[prizeNumber].option;
    setTotalPoints(totalPoints + wonPoints + betPoints); // 총 포인트 업데이트
  };

  return (
    <>
      <Header title="나의 챌린지" />
      <Container>
        <SectionTitle>진행 중인 챌린지</SectionTitle>
        <ChallengeList>
          {ongoingChallenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participants={challenge.participants}
              isCompleted={challenge.isCompleted}
              daysLeft={challenge.daysLeft}
            />
          ))}
        </ChallengeList>

        <RouletteContainer>
          <SectionTitle>포인트 내기 룰렛</SectionTitle>
          <ResultText>현재 나의 포인트: {totalPoints}점</ResultText>
          <input
            type="number"
            value={betPoints}
            onChange={handleBetPointsChange}
            placeholder="내기에 걸 포인트를 입력해주세요"
          />
          <button onClick={onStartRoulette}>돌릴래!</button>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={rouletteData}
            onStopSpinning={onRouletteStop}
            backgroundColors={["#a2d2ff", "#bde0fe", "#ffafcc", "#ffc8dd", "#a2d2ff"]}
            textColors={["#000"]}
          />
          <ResultText>룰렛 점수: {rouletteData[prizeNumber].option}점</ResultText>
        </RouletteContainer>

        <SectionTitle>완료한 챌린지</SectionTitle>
        <ChallengeList>
          {completedChallenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              startDate={challenge.startDate}
              endDate={challenge.endDate}
              participants={challenge.participants}
              isCompleted={challenge.isCompleted}
            />
          ))}
        </ChallengeList>
      </Container>
    </>
  );
};

export default MyChallenges;