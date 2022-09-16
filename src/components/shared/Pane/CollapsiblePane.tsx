import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { AnimHeight } from '../Animations/AnimHeight';
import { CollapseButton } from '../Button/CollapseButton';

const Container = styled.div`
  background-color: ${props => props.theme.color.background100};
  color: ${props => props.theme.color.textPrimary};
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.low};
`;

const PaneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background90};
  height: 40px;
  padding: 0px 4px;
`;

const PaneTitle = styled.div`
  padding: 0px 12px;
  font-weight: 700;
`;

const PaneInner = styled.div`
  padding: 16px;
  box-sizing: border-box;
  height: 240px;
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
        <CollapseButton
          isCollapsed={isCollapsed}
          onClick={toggleCollapse}
        />
      </PaneHeader>
      <AnimHeight animClosed={isCollapsed}>
        <PaneInner>
          {children}
        </PaneInner>
      </AnimHeight>
    </Container>
  );
};
