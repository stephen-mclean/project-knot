import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../../../components/Input/Input";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";

const NameForm = ({ handleSubmit, onSubmit, onCancel }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field name="name" label="Please enter your full name" component={Input} />

    <ButtonGroup right>
      <Button buttonType={TYPES.OUTLINE} onClick={onCancel}>
        Cancel
      </Button>
      <Button buttonStyle={STYLES.PRIMARY} type="submit">
        Next
      </Button>
    </ButtonGroup>
  </form>
);

export default reduxForm({
  form: "rsvpnameform"
})(NameForm);
