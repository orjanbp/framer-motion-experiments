import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';
import { AnimFadeOnLoad } from '@/components/shared/Animations/AnimFadeOnLoad';

const Container = styled(motion.div)`
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
      {mapToBlocks.map((_, i) => (
        <AnimFadeOnLoad key={i}>
          <SquareBlock />
        </AnimFadeOnLoad>
      ))}
    </Container>
  );
};