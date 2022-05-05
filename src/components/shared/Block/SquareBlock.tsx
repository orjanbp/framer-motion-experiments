import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  width: 200px;
  height: 200px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow.low};
`;

export const SquareBlock = () => (
  <Container />
);
