import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { onClickRoutes, onLoadRoutes } from '@/components/AppRouting/AppRouting';
import { Heading } from './core/Heading';
import { GroupHeading } from './core/GroupHeading';
import { GroupedLinks } from './core/GroupedLinks';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  height: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  padding: 0px 8px 16px;
`;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const isBasePath = pathname === '/';
  return (
    <Container>
      <Heading isActive={isBasePath} />
      <Content>
        <GroupHeading title="OnLoad Animations" />
        <GroupedLinks pathname={pathname} routes={onLoadRoutes} />
        <GroupHeading title="Controlled Animations" />
        <GroupedLinks pathname={pathname} routes={onClickRoutes} />
      </Content>
    </Container>
  );
};