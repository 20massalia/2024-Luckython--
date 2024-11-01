import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeHeader from "../components/ChallengeHeader";
import { COLORS } from "../utils/color";
import { getChallengeList } from "../services/Challenge";

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  box-sizing: border-box;
  padding-bottom: 60px;
  min-height: 100vh;
`;

const ChallengeListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedTag, setSelectedTag] = useState("전체");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllChallenges = async () => {
      try {
        const data = await getChallengeList();
        setChallenges(data);
      } catch (error) {
        console.error("Failed to fetch all challenges:", error);
      }
    };
    fetchAllChallenges();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleChallengeClick = (challenge) => {
    navigate(`/challenges/${challenge.chId}`, {
      state: challenge,
      replace: true,
    });
  };

  return (
    <>
      <ChallengeHeader title={"진행 중인 챌린지"} onTagClick={handleTagClick} selectedTag={selectedTag} />
      <Container>
        <ChallengeListContainer>
          {challenges.map((challenge) => (
            <div
              key={challenge.chId}
              onClick={() => handleChallengeClick(challenge)}
            >
              <ChallengeCard
                title={challenge.title}
                description={challenge.content}
                startDate={challenge.startDate}
                participants={challenge.participants || 0}
                isCompleted={false}
              />
            </div>
          ))}
        </ChallengeListContainer>
      </Container>
    </>
  );
};

export default ChallengeList;