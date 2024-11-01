import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
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

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const PopupButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChallengeDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(location.state);
  const [isParticipating, setIsParticipating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`/api/challenge/${id}`);
        console.log("Challenge data:", response.data);
        setChallenge(response.data);
        setIsParticipating(response.data.isParticipated);
      } catch (error) {
        console.error("Failed to fetch challenge:", error);
      }
    };

    if (!challenge) {
      fetchChallenge();
    }
  }, [id, challenge]);

  const handleJoinClick = () => {
    setShowPopup(true);
  };

  const handleParticipate = async () => {
    try {
      await axios.put(`/api/challenge?chId=${id}&userId=1`);
      setIsParticipating(true);
      setShowPopup(false);
    } catch (error) {
      console.error("Failed to join challenge:", error);
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
    navigate(-1); // 이전 페이지로 돌아가기
  };

  const handleCertificationPage = () => {
    navigate(`/challenges/${id}/certification`);
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
          <Description>{challenge.content}</Description>
          <DateText>{challenge.startDate} - {challenge.endDate}</DateText>
          <Reward>보상: {challenge.prize}포인트</Reward>
          {!isParticipating ? (
            <Button text="할래!" onClick={handleJoinClick} />
          ) : (
            <>
              <Button text="참여 완료!" disabled />
              <br />
              <Button text="참여 인증하고 보상 받을래!" onClick={handleCertificationPage} />
            </>
          )}
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
        </ReviewsContainer>
      </Container>

      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <p>이걸 빼? 하남자 인정 or 참여</p>
            <PopupButton onClick={handleCancel} style={{ backgroundColor: '#555', color: 'white' }}>
              하남자 인정
            </PopupButton>
            <PopupButton onClick={handleParticipate} style={{ backgroundColor: '#007BFF', color: 'white' }}>
              참여
            </PopupButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
};

export default ChallengeDetail;