import styled from "styled-components";

export default styled.nav`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    `1px solid ${props.theme.colors.background.secondary}`};
`;
