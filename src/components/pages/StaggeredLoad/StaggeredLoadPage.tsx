import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';
import { AnimStaggeredLoad, FadeStaggeredChild } from '@/components/shared/Animations/AnimStaggeredLoad';

const Container = styled(AnimStaggeredLoad)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 64px 32px;
`;

export const StaggeredLoadPage = () => {
  const mapToBlocks = Array.from(Array(10).keys());
  return (
    <Container>
      {mapToBlocks.map((_, i) => (
        <FadeStaggeredChild key={i}>
          <SquareBlock />
        </FadeStaggeredChild>
      ))}
    </Container>
  );
};