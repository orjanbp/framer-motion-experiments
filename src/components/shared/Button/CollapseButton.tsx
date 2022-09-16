import styled, { css } from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
  &:active {
    background-color: ${props => props.theme.color.buttonActive};
  }
`;

const StyledChevron = styled(IoChevronDownOutline) <{ isCollapsed: boolean }>`
  width: 24px;
  height: 24px;
  transition: transform 0.1s ease;
  ${props => props.isCollapsed && css`
    transform: scaleY(-1);
  `}
`;

interface Props {
  onClick: () => void;
  isCollapsed: boolean;
}
export const CollapseButton = ({ onClick, isCollapsed }: Props) => (
  <StyledButton onClick={onClick}>
    <StyledChevron isCollapsed={isCollapsed} />
  </StyledButton>
);
