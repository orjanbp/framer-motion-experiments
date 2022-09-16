import styled from "styled-components";

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas: 'sidebar content';
  grid-template-columns: 320px auto;
`;

export const LayoutArea = styled.div<{ area: string }>`
  grid-area: ${props => props.area};
`;

export const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0px auto;
  padding: 0px 32px;
`;

export const PageContent = styled.div`
  padding: 64px 0px;
`;