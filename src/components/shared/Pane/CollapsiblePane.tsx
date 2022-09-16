import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { CloseButton } from '../Button/CloseButton';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  color: ${props => props.theme.color.textPrimary};
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.low};
`;

const PaneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background80};
  height: 40px;
  padding: 0px 8px;
`;

const PaneTitle = styled.div`
  padding: 0px 8px;
  font-weight: 700;
`;

const PaneInner = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

interface Props {

}
export const CollapsiblePane = ({ children }: PropsWithChildren<Props>) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <Container>
      <PaneHeader>
        <PaneTitle>Pane Title</PaneTitle>
        <CloseButton
          isCollapsed={isCollapsed}
          onClick={toggleCollapse}
        />
      </PaneHeader>
      <PaneInner>
        {children}
      </PaneInner>
    </Container>
  );
};
