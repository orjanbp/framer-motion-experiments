import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  margin: auto;
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 48px);
  padding: 32px;
  box-sizing: border-box;
`;

export const HomePage = () => (
  <Container>
    Hello World
  </Container>
);
