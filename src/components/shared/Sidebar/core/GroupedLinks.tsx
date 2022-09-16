import { RouteList } from '@/utils/types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 0px 16px;
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

interface Props {
  pathname: string;
  routes: RouteList;
}
export const GroupedLinks = ({ pathname, routes }: Props) => (
  <Container>
    {routes.map(route => (
      <SidebarLink to={route.path} isActive={pathname === route.path}>
        <CurrentPageMarker isActive={pathname === route.path} />
        <SidebarText>{route.link}</SidebarText>
      </SidebarLink>
    ))}
  </Container>
);
