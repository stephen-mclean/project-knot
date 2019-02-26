import React from "react";
import styled from "styled-components";
import { B1 } from "../Fonts/Fonts";
import Radio from "./Radio";

const Container = styled.div`
  margin-bottom: 1rem;
`;

const RadioContainer = styled.div`
  display: inline-block;
  margin-right: 0.5rem;

  :last-child {
    margin-right: 0;
  }
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

export default ({ label, options, input }) => (
  <Container>
    {label && <Label>{label}</Label>}
    {options.map(option => (
      <RadioContainer key={option}>
        <Radio
          label={option}
          value={option}
          checked={input.value === option}
          onChange={input.onChange}
        />
      </RadioContainer>
    ))}
  </Container>
);
