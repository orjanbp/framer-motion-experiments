import { routeList } from '@/components/AppRouting/AppRouting';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  height: 100%;
  box-sizing: border-box;
`;

const HeadingLink = styled(Link)`
  display: block;
  color: ${props => props.theme.color.textPrimary};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 32px;
  padding-bottom: 0px;
  text-decoration: none;
`;

const Content = styled.div`
  padding: 32px;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 8px 16px;
`;

export const Sidebar = () => (
  <Container>
    <HeadingLink to="/">
      Framer Motion Experiments
    </HeadingLink>
    <Content>
      {routeList.map(route => (
        <SidebarLink to={route.path}>{route.link}</SidebarLink>
      ))}
    </Content>
  </Container>
);