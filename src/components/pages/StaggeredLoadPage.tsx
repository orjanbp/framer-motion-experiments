import React from 'react';
import styled from 'styled-components';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';
import { AnimStaggeredLoad, StaggeredLoadChild } from '@/components/shared/Animations/AnimStaggeredLoad';
import { Description } from '@/components/shared/Information';
import { PageContent, PageWrapper } from '@/components/layout/AppLayout';

const StyledAnimStaggered = styled(AnimStaggeredLoad)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const StaggeredLoadPage = () => {
  const mapToBlocks = Array.from(Array(10).keys());
  return (
    <PageWrapper>
      <Description title="Staggered Load">
        <p>
          Load in a parent component that has been set up to stagger the animations of child components.
          Then add in the child components with their own animations. Parent component will automatically
          delay the rendering of each child component so they happen in succession.
        </p>
      </Description>
      <PageContent>
        <StyledAnimStaggered>
          {mapToBlocks.map((_, i) => (
            <StaggeredLoadChild key={i}>
              <SquareBlock />
            </StaggeredLoadChild>
          ))}
        </StyledAnimStaggered>
      </PageContent>
    </PageWrapper>
  );
};