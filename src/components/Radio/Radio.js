import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { B1 } from "../Fonts/Fonts";

const Label = styled(B1)`
  color: ${props => props.theme.colors.foreground.tertiary};
`;

const Container = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  min-height: 2rem;
  padding-left: 2.5rem;
`;

const CheckboxContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.foreground.quintenary};
`;

const CheckMark = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  visibility: hidden;
  color: ${props => props.theme.colors.foreground.quintenary};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  :checked ~ ${CheckboxContainer} {
    background-color: ${props => props.theme.colors.foreground.tertiary};

    ${CheckMark} {
      visibility: visible;
    }
  }

  :checked ~ ${Label} {
    color: ${props => props.theme.colors.foreground.secondary};
  }
`;

export default ({ label, checked, onChange, value }) => (
  <Container>
    <Input type="radio" checked={checked} onChange={onChange} value={value} />
    <Label>{label}</Label>
    <CheckboxContainer>
      <CheckMark icon="check" />
    </CheckboxContainer>
  </Container>
);
