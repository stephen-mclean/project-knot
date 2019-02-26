import styled from "styled-components";

const TestContainer = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${props => props.theme.colors.foreground.default};
`;

export default TestContainer;
