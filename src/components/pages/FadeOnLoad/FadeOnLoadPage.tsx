import React from 'react';
import styled from 'styled-components';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 64px 32px;
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