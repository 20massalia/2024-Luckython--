import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/color';

const Container = styled.div `
  align-items: center;
  align-self: stretch;
  background-color: ${COLORS.mint};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px;
  position: relative;
  width: 100%;
`

const Text = styled.div`
  font-size: 25px;
  font-weight: 700;
`

const Header = ({title}) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default Header;