import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 480px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  font-size: 16px;
`;

const NavItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavItem onClick={() => navigate('/')}>홈</NavItem>
      <NavItem onClick={() => navigate('/rank')}>랭크</NavItem>
      <NavItem onClick={() => navigate('/mychallenges')}>나의 챌린지</NavItem>
      <NavItem onClick={() => navigate('/mypage')}>마이페이지</NavItem>
    </NavContainer>
  );
};

export default NavBar;