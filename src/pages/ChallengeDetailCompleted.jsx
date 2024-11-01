import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeHeader from '../components/ChallengeHeader';
import { COLORS } from '../utils/color';
import Button from '../components/Button';
import axios from '../services/axiosInstance';

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

const ChallengeDetailCompleted = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`/api/challenge/${id}`);
        console.log("Fetched challenge data:", response.data);
        setChallenge(response.data);
      } catch (error) {
        console.error("Failed to fetch challenge:", error);
      }
    };
  
    fetchChallenge();
  }, [id]);

  const handleReviewClick = () => {
    navigate(`/challenges/${id}/review`);
  };

  return (
    <>
      <ChallengeHeader title={challenge.title} />
      <Container>
        <ChallengeInfo>
          <Title>{challenge.title}</Title>
          <Description>{challenge.content}</Description>
          <DateText>{challenge.startDate} - {challenge.endDate}</DateText>
          <Reward>보상: {challenge.prize}포인트</Reward>
          <Button text="참여 완료!" disabled />
        </ChallengeInfo>

        <ReviewsContainer>
          <ReviewTitle>참여 후기</ReviewTitle>
          {challenge.reviews && challenge.reviews.length > 0 ? (
            challenge.reviews.map((review) => (
              <Review key={review.id}>
                <ReviewText>{review.text}</ReviewText>
                <ReviewDate>{review.date}</ReviewDate>
              </Review>
            ))
          ) : (
            <p>아직 참여 후기가 없습니다.</p>
          )}
          <Button text="후기 작성할래!" onClick={handleReviewClick} />
        </ReviewsContainer>
      </Container>
    </>
  );
};

export default ChallengeDetailCompleted;