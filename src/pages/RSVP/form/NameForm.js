import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import Input from "../../../components/Input/Input";
import { S1 } from "../../../components/Fonts/Fonts";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";

const Title = styled(S1)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

const NameForm = ({
  handleSubmit,
  invalid,
  submitting,
  pristine,
  onSubmit,
  onCancel
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Title>
      If you are responding for you and a guest (or your family), you&#39;ll be
      able to RSVP for your entire group.
    </Title>

    <Field
      name="name"
      label="Please enter your full name"
      component={Input}
      validate={required}
    />

    <ButtonGroup right>
      <Button buttonType={TYPES.OUTLINE} onClick={onCancel}>
        Cancel
      </Button>
      <Button
        buttonStyle={STYLES.PRIMARY}
        type="submit"
        disabled={invalid || submitting || pristine}
      >
        Next
      </Button>
    </ButtonGroup>
  </form>
);

export default reduxForm({
  form: "rsvpnameform"
})(NameForm);
