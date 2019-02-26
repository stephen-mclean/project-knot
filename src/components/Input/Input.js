import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { B1 } from "../Fonts/Fonts";

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${props => props.theme.colors.foreground.quintenary};
  font-size: ${props => props.theme.fonts.b1.size};
  font-weight: ${props => props.theme.fonts.b1.weight};
  letter-spacing: ${props => props.theme.fonts.b1.letterspacing};
  color: ${props => props.theme.colors.foreground.secondary};
  border: none;
  border-radius: 0.25rem;
  ::placeholder {
    color: ${props => props.theme.colors.foreground.tertiary};
  }
`;

const Input = ({ label, placeholder, input, type }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <StyledInput type={type} {...input} placeholder={placeholder} />
  </Container>
);

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired
};

export default Input;
