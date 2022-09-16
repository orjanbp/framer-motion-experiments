import React from 'react';
import styled from 'styled-components';
import { AnimStaggeredLoad } from '@/components/shared/Animations/AnimStaggeredLoad';
import { Description } from '@/components/shared/Information';
import { PageContent, PageWrapper } from '@/components/layout/AppLayout';
import { CollapsiblePane } from '../shared/Pane/CollapsiblePane';

const StyledStaggeredLoad = styled(AnimStaggeredLoad)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const CollapsiblePanePage = () => (
  <PageWrapper>
    <Description title="Collapsible Pane">
      <p>
        Present a pane with a toggle button that can be clicked to collapse and expand,
        with an animated transition between the two states.
      </p>
    </Description>
    <PageContent>
      <CollapsiblePane>
        Content within pane element.
      </CollapsiblePane>
    </PageContent>
  </PageWrapper>
);