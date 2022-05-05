import React from 'react';
import styled from 'styled-components';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';

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

export const FadeOnLoadPage = () => {
  const mapToBlocks = Array.from(Array(10).keys());
  return (
    <Container>
      {mapToBlocks.map(() => (
        <SquareBlock />
      ))}
    </Container>
  );
};