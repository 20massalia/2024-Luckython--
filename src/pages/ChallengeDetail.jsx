import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeHeader from '../components/ChallengeHeader';
import { COLORS } from '../utils/color';
import Button from '../components/Button';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
`;

const ChallengeInfo = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0 0 10px 0;
`;

const DateText = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0 0 10px 0;
`;

const Reward = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const ReviewsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const Review = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 10px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: 12px;
  color: #999;
`;

const ChallengeDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(location.state);

  useEffect(() => {
    if (!challenge) {
      // localStorage에서 데이터 가져오기
      const storedChallenge = localStorage.getItem(`challenge-${id}`);
      if (storedChallenge) {
        setChallenge(JSON.parse(storedChallenge));
      }
    }
  }, [id, challenge]);

  const handleJoinClick = () => {
    const confirmed = window.confirm('참여하시겠습니까?');
    
    if (confirmed) {
      // '할래' 선택 시 handleJoinClick 실행
      navigate(`/challenge-photo/${id}`, { state: challenge });
    } else {
      // '말래' 선택 시 메시지 출력
      alert('이걸 빼?');
    }
  };

  if (!challenge) {
    return <Container>해당 챌린지의 정보를 찾을 수 없습니다.</Container>;
  }

  return (
    <>
      <ChallengeHeader title={challenge.title} />
      <Container>
        <ChallengeInfo>
          <Title>{challenge.title}</Title>
          <Description>{challenge.description}</Description>
          <DateText>{challenge.startDate} - {challenge.endDate}</DateText>
          <Reward>보상: {challenge.reward}</Reward>
          <Button text="할래!" onClick={handleJoinClick} />
        </ChallengeInfo>

        <ReviewsContainer>
          <ReviewTitle>참여 후기</ReviewTitle>
          {challenge.reviews.map((review) => (
            <Review key={review.id}>
              <ReviewText>{review.text}</ReviewText>
              <ReviewDate>{review.date}</ReviewDate>
            </Review>
          ))}
        </ReviewsContainer>
      </Container>
    </>
  );
};

export default ChallengeDetail;