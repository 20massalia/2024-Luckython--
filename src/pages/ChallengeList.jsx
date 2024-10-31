import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeHeader from "../components/ChallengeHeader";
import { COLORS } from "../utils/color";
// import { get_challenge_list, get_challenge_hashtag } from "../services/Challenge";

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

  // 전체 챌린지 목록 가져오기 (더미 데이터 사용)
  const fetchAllChallenges = async () => {
    try {
      // const response = await get_challenge_list();
      // setChallenges(response.data);

      // 더미 데이터
      const allChallengesDummyData = [
        {
          chId: 1,
          title: "개구리 귀엽게 그리기 챌린지",
          content: "개구리를 귀엽게 그리는 챌린지입니다!",
          date: "2024-10-15",
          participants: 1000,
        },
        {
          chId: 2,
          title: "하루 만보 걷기 챌린지",
          content: "건강을 위해 하루에 만보 걷기!",
          date: "2024-10-20",
          participants: 800,
        },
        {
          chId: 3,
          title: "자전거 30분 타기",
          content: "하루에 자전거 30분씩 타기",
          date: "2024-10-18",
          participants: 450,
        },
        {
          chId: 4,
          title: "매일 1시간 그림 그리기",
          content: "하루에 1시간씩 그림 그리기",
          date: "2024-10-16",
          participants: 300,
        },
      ];

      setChallenges(allChallengesDummyData);
    } catch (error) {
      console.error("Failed to fetch all challenges:", error);
    }
  };

  // 해시태그로 챌린지 목록 가져오기 (더미 데이터 사용)
  const fetchChallengesByHashtag = async (hashtag) => {
    try {
      // const response = await get_challenge_hashtag(hashtag);
      // setChallenges(response.data);

      // 더미 데이터
      const dummyData = {
        "#운동": [
          {
            chId: 3,
            title: "자전거 30분 타기",
            content: "하루에 자전거 30분씩 타기",
            date: "2024-10-18",
            participants: 450,
          },
        ],
        "#취미": [
          {
            chId: 4,
            title: "매일 1시간 그림 그리기",
            content: "하루에 1시간씩 그림 그리기",
            date: "2024-10-16",
            participants: 300,
          },
        ],
      };

      setChallenges(dummyData[hashtag] || []);
    } catch (error) {
      console.error("Failed to fetch challenges by hashtag:", error);
    }
  };

  useEffect(() => {
    if (selectedTag === "전체") {
      fetchAllChallenges(); // 전체 목록 가져오기
    } else {
      fetchChallengesByHashtag(selectedTag); // 선택된 태그에 따른 목록 가져오기
    }
  }, [selectedTag]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleChallengeClick = (challenge) => {
    navigate(`/challenges/${challenge.chId}`, {
      state: challenge,
      replace: true,
    });
    localStorage.setItem(
      `challenge-${challenge.chId}`,
      JSON.stringify(challenge)
    );
  };

  return (
    <>
      <ChallengeHeader
        title={"진행 중인 챌린지"}
        onTagClick={handleTagClick}
        selectedTag={selectedTag}
      />
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
                startDate={challenge.date}
                participants={challenge.participants}
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
