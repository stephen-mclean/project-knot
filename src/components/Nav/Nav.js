import styled from "styled-components";

export default styled.nav`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    `1px solid ${props.theme.colors.background.secondary}`};
`;
