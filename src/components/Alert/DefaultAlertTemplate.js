import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${props => props.theme.colors.danger.default};
  color: ${props => props.theme.colors.danger.verylight};
`;

export default ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);
