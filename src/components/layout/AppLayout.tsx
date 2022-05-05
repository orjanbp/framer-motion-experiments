import styled from "styled-components";

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas: 'sidebar content';
  grid-template-columns: 400px auto;
`;

export const LayoutArea = styled.div<{ area: string }>`
  grid-area: ${props => props.area};
`;