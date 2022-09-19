import React, { useState } from 'react';
import { Description } from '@/components/shared/Information';
import { PageContent, PageWrapper } from '@/components/layout/AppLayout';
import styled from 'styled-components';
import { ListBlockWithClose } from '../shared/Block/ListBlockWithClose';
import { BoxButton } from '../shared/Button/BoxButton';
import { AnimatePresence } from 'framer-motion';
import { AnimSwipeEnterExit } from '../shared/Animations/AnimSwipeEnterExit';
import { ButtonGroup } from '../shared/Button/ButtonGroup';

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const SwipeOnAddRemovePage = () => {
  const [totalAdded, setTotalAdded] = useState<number>(1);
  const [elementList, setElementList] = useState<string[]>(['List Item 1']);

  const handleAdd = () => {
    setElementList(last => [`List Item ${totalAdded + 1}`, ...last]);
    setTotalAdded(last => last + 1);
  }

  const handleClose = (element: string) => {
    setElementList(elementList.filter(el => el !== element));
  };

  const handleCloseAll = () => {
    setElementList([]);
  };

  return (
    <PageWrapper>
      <Description title="Swipe on Add / Remove">
        <p>
          Present a list of elements that can be expanded by clicking a button, which will then
          add a new element to the top of the list. When a new element is added, it animated onto
          the page. Each element is then able to be removed from the list by clicking on its
          respective close button.
        </p>
        <StyledButtonGroup>
          <BoxButton text="Add New Item" onClick={handleAdd} />
          <BoxButton text="Remove All Items" variant="secondary" onClick={handleCloseAll} />
        </StyledButtonGroup>
      </Description>
      <PageContent>
        <AnimatePresence>
          {elementList.map(element => (
            <AnimSwipeEnterExit key={element}>
              <ListBlockWithClose name={element} onClick={() => handleClose(element)} />
            </AnimSwipeEnterExit>
          ))}
        </AnimatePresence>
      </PageContent>
    </PageWrapper>
  );
};