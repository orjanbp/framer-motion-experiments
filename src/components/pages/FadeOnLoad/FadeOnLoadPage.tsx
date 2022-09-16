import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SquareBlock } from '@/components/shared/Block/SquareBlock';
import { AnimFadeOnLoad } from '@/components/shared/Animations/AnimFadeOnLoad';
import { Description } from '@/components/shared/Information';
import { PageContent, PageWrapper } from '@/components/layout/AppLayout';

const StyledFadeOnLoad = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const FadeOnLoadPage = () => {
  const mapToBlocks = Array.from(Array(10).keys());
  return (
    <PageWrapper>
      <Description title="Fade on Load">
        <p>
          When a component loads in, render with an opacity 0 and transition to full visibility.
          Each component controls its own transition and delay -- so when they are all the same they
          all happen at the same time as shown here.
        </p>
      </Description>
      <PageContent>
        <StyledFadeOnLoad>
          {mapToBlocks.map((_, i) => (
            <AnimFadeOnLoad key={i}>
              <SquareBlock />
            </AnimFadeOnLoad>
          ))}
        </StyledFadeOnLoad>
      </PageContent>
    </PageWrapper>
  );
};