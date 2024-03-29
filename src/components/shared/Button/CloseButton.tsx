import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

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

const StyledClose = styled(IoCloseOutline)`
  width: 24px;
  height: 24px;
`;

interface Props {
  onClick: () => void;
}
export const CloseButton = ({ onClick }: Props) => (
  <StyledButton onClick={onClick}>
    <StyledClose />
  </StyledButton>
);
