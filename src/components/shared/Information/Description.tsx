import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 48px;
  max-width: 900px;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`;

interface Props {
  title: string;
}
export const Description = ({ children, title }: PropsWithChildren<Props>) => (
  <Container>
    <Heading>{title}</Heading>
    {children}
  </Container>
);
