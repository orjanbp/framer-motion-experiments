import React from 'react';
import styled from 'styled-components';
import { CloseButton } from '../Button/CloseButton';

const Wrapper = styled.div`
  padding-bottom: 16px;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background100};
  color: ${props => props.theme.color.textPrimary};
  width: 100%;
  height: 60px;
  padding: 0px 4px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow.low};
`;

const BlockTitle = styled.div`
  padding: 0px 12px;
  font-weight: 700;
`;

interface Props {
  name: string;
  onClick: () => void;
}
export const ListBlockWithClose = ({ name, onClick }: Props) => (
  <Wrapper>
    <Element>
      <BlockTitle>{name}</BlockTitle>
      <CloseButton onClick={onClick} />
    </Element>
  </Wrapper>
);
