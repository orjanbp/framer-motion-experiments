import React from 'react';
import styled from 'styled-components';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';
import { AnimStaggeredLoad, FadeStaggeredChild } from '@/components/shared/Animations/AnimStaggeredLoad';
import { Description } from '@/components/shared/Information';

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
    <div>
      <Description title="Staggered Load">
        <p>
          Load in a parent component that has been set up to stagger the animations of child components.
          Then add in the child components with their own animations. Parent component will automatically
          delay the rendering of each child component so they happen in succession.
        </p>
      </Description>
      <Container>
        {mapToBlocks.map((_, i) => (
          <FadeStaggeredChild key={i}>
            <SquareBlock />
          </FadeStaggeredChild>
        ))}
      </Container>
    </div>
  );
};