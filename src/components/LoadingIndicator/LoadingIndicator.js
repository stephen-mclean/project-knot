import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => (
  <Container>
    <FontAwesomeIcon icon="spinner" spin />
  </Container>
);
