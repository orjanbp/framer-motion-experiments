import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routeList } from '@/components/AppRouting/AppRouting';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  height: 100%;
  box-sizing: border-box;
`;

const Heading = styled.div`
  padding: 16px;
  padding-bottom: 0px;
`;

const HeadingLink = styled(Link) <{ isActive?: boolean }>`
  display: block;
  color: ${props => props.theme.color.textPrimary};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  ${props => props.isActive && css`
    color: ${props.theme.color.primary100};
  `};
  &:hover {
    background-color: ${props => props.theme.color.primary100};
    color: ${props => props.theme.color.background100};
    transition: all 0.2s ease;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const SidebarLink = styled(Link) <{ isActive?: boolean }>`
  display: flex;
  align-items: stretch;
  color: ${props => props.theme.color.textPrimary};
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  ${props => props.isActive && css`
    color: ${props.theme.color.primary100};
  `};
  &:hover {
    background-color: ${props => props.theme.color.primary100};
    color: ${props => props.theme.color.background100};
    transition: all 0.2s ease;
  }
`;

const CurrentPageMarker = styled.div<{ isActive?: boolean }>`
  width: 4px;
  border-radius: 2px;
  margin: 4px 0px;
  ${props => props.isActive && css`
    background-color: ${props => props.theme.color.primary100};
  `}
`;

const SidebarText = styled.div`
  padding: 12px 12px;
`;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const isBasePath = pathname === '/';
  return (
    <Container>
      <Heading>
        <HeadingLink to="/" isActive={isBasePath}>
          Framer Motion Experiments
        </HeadingLink>
      </Heading>
      <Content>
        {routeList.map(route => (
          <SidebarLink to={route.path} isActive={pathname === route.path}>
            <CurrentPageMarker isActive={pathname === route.path} />
            <SidebarText>{route.link}</SidebarText>
          </SidebarLink>
        ))}
      </Content>
    </Container>
  );
};