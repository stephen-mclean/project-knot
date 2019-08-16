import React from "react";
import styled from "styled-components";
import { B1 } from "../Fonts/Fonts";
import Radio from "./Radio";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const RadioContainer = styled.div`
  margin-bottom: 0.5rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

export default ({ label, options, input }) => (
  <Container>
    {label && <Label>{label}</Label>}
    {options.map(option => (
      <RadioContainer key={option.value}>
        <Radio
          label={option.label}
          value={option.value}
          checked={input.value === option.value}
          onChange={input.onChange}
        />
      </RadioContainer>
    ))}
  </Container>
);
