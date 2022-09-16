import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 16px 8px;
`;

const GroupDivider = styled.div`
  height: 1px;
  background-color: ${props => props.theme.color.background60};
  margin: 16px 0px 24px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;

interface Props {
  title: string;
}
export const GroupHeading = ({ title }: Props) => (
  <Container>
    <GroupDivider />
    <Title>{title}</Title>
  </Container>
);
