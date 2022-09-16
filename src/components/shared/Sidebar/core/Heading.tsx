import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 16px 8px;
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

interface Props {
  isActive: boolean;
}
export const Heading = ({ isActive }: Props) => (
  <Container>
    <HeadingLink to="/" isActive={isActive}>
      Framer Motion Experiments
    </HeadingLink>
  </Container>
);
