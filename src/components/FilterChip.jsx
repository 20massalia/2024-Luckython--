import React from "react";
import styled from "styled-components";

const ChipContainer = styled.div`
  border-radius: 8px;
  background-color: ${props => props.isActive ? "#fff" : "transparent"};
  display: flex;
  min-height: 32px;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  border: ${props => props.isActive ? "none" : "1px solid #efefef"};
`;

const ChipContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
`;

const ActiveIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 18px;
`;

const ChipLabel = styled.span`
  color: inherit;
`;

const FilterChip = ({ label, isActive }) => {
  return (
    <ChipContainer isActive={isActive}>
      <ChipContent>
        {isActive && <ActiveIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bf48afca09d16e2b3ec239beb919ca517d90108625b2d61d4dced48894d38df?placeholderIfAbsent=true&apiKey=1a074e0f0e724c1797a1d27b03006d15" alt="Active filter" />}
        <ChipLabel>{label}</ChipLabel>
      </ChipContent>
    </ChipContainer>
  );
};

export default FilterChip;