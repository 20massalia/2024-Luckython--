import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

const StyledButton = styled.button`
  background-color: ${COLORS.grayblue};
  color: white;
  padding: 10px 0;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
