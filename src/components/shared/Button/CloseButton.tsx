import styled, { css } from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

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
    background-color: ${props => props.theme.color.background80};
  }
  &:active {
    background-color: ${props => props.theme.color.background70};
  }
`;

const StyledChevron = styled(BsChevronDown) <{ isCollapsed: boolean }>`
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
export const CloseButton = ({ onClick, isCollapsed }: Props) => (
  <StyledButton onClick={onClick}>
    <StyledChevron isCollapsed={isCollapsed} />
  </StyledButton>
);
