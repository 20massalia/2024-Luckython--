import React from "react";
import styled from "styled-components";
import FilterChip from "./FilterChip";
import { useParams, useNavigate } from 'react-router-dom';
import { COLORS } from "../utils/color";

const Header = styled.header`
  background-color: ${COLORS.mint};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  padding: 20px 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${COLORS.black};
  font-size: 12px;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 35px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0;
`;

const TagContainer = styled.nav`
  display: flex;
  margin-top: 15px;
  width: 100%;
  align-items: start;
  gap: 10px;
  overflow: hidden;
  color: ${COLORS.grayblue};
  white-space: nowrap;
  font: 500 14px/20px Roboto, sans-serif;
`;

const ChallengeHeader = ({ title, children }) => {
  const navigate = useNavigate();
  const tags = ["전체", "#운동", "#취미", "#공부", "#그림"];

  return (
    <>
      <Header>
        <TitleContainer>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e72429b027b005fd10c4b5e2f87e336d5b478d670f7eec0ef4b53fa7d0ef1d4?placeholderIfAbsent=true&apiKey=1a074e0f0e724c1797a1d27b03006d15" alt="Challenge icon" onClick={() => navigate(-1)}/>
          <Title>{title}</Title>
        </TitleContainer>
        <TagContainer>
          {tags.map((tag, index) => (
            <FilterChip key={index} label={tag} isActive={index === 0} />
          ))}
        </TagContainer>
      </Header>
    </>
  );
};

export default ChallengeHeader;