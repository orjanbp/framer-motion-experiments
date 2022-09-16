import React from 'react';
import { Description } from '@/components/shared/Information';
import { PageContent, PageWrapper } from '@/components/layout/AppLayout';
import { CollapsiblePane } from '../shared/Pane/CollapsiblePane';
import styled from 'styled-components';

const PageContentWithSpace = styled(PageContent)`
  & > * + * {
    margin-top: 32px;
  }
`

export const FadeOnAddRemovePage = () => (
  <PageWrapper>
    <Description title="Collapsible Pane">
      <p>
        Present a pane with a toggle button that can be clicked to collapse and expand,
        with an animated transition between the two states. In this example, the animation
        controls are entirely within the Pane component being rendered, with the motion
        state between open and closed handled by a boolean State.
      </p>
    </Description>
    <PageContentWithSpace>
      <CollapsiblePane>
        Content within first pane element.
      </CollapsiblePane>
      <CollapsiblePane>
        Content within second pane element.
      </CollapsiblePane>
    </PageContentWithSpace>
  </PageWrapper>
);