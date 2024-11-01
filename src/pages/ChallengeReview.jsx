import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../services/axiosInstance';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${COLORS.grayblue};
  border-radius: 8px;
  resize: none;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: ${COLORS.blue};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const ChallengeReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState("");

  const userId = process.env.REACT_APP_USER_ID || 1;

  const handleReviewSubmit = async () => {
    if (review.trim() === "") {
      alert("후기를 작성해 주세요!");
      return;
    }

    console.log(`Submitting review for Challenge ID: ${id}, User ID: ${userId}`);
    console.log(`Review Content: ${review}`);

    try {
      const response = await axios.post(`/api/review/${id}/${userId}`, { review });
      console.log("Review submitted successfully:", response.data);
      alert("후기가 작성되었습니다!");
      navigate(`/challenges/${id}`);
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("후기 작성에 실패하였습니다.");
    }
  };

  return (
    <Container>
      <ReviewContainer>
        <Title>챌린지를 완료한 소감을 공유해주세요!</Title>
        <Textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="챌린지 후기를 작성해 주세요"
        />
        <SubmitButton onClick={handleReviewSubmit}>작성 완료!</SubmitButton>
      </ReviewContainer>
    </Container>
  );
};

export default ChallengeReview;