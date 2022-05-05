import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  height: 100%;
  box-sizing: border-box;
`;

const HeadingText = styled.div`
  color: ${props => props.theme.color.textPrimary};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 32px;
  padding-bottom: 0px;
`;

const Content = styled.div`
  padding: 32px;
`;

export const Sidebar = () => (
  <Container>
    <HeadingText>Framer Motion Experiments</HeadingText>
    <Content>
    </Content>
  </Container>
);