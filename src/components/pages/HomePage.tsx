import { PageWrapper } from '@/components/layout/AppLayout';
import { Description } from '@/components/shared/Information';
import React from 'react';

export const HomePage = () => (
  <PageWrapper>
    <Description title="Framer Motion Experiments">
      <p>
        This is a collection of sample experiments for implementing small, reusable Framer Motion animations
        that can easily be wrapped around a set of components. The main focus is to explore ways to use
        Framer Motion for transitions and micro-interactions.
      </p>
    </Description>
  </PageWrapper>
);
