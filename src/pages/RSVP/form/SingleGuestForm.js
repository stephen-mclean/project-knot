import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import RadioGroup from "../../../components/Radio/RadioGroup";
import TextArea from "../../../components/TextArea/TextArea";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";

class SingleGuestForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  onGuestFormSubmit = values => {
    const { onSubmit, reset } = this.props;
    onSubmit(values);
    reset();
  };

  render() {
    const { handleSubmit, onCancel } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onGuestFormSubmit)}>
        <Field
          name="isAttending"
          label="Is attending?"
          options={["Yes", "No"]}
          component={RadioGroup}
        />

        <Field
          name="isAttendingAfterParty"
          label="Is attending after party?"
          options={["Yes", "No"]}
          component={RadioGroup}
        />

        <Field
          name="meal"
          label="Meal Choice"
          options={["Lamb", "Salmon"]}
          component={RadioGroup}
        />

        <Field
          name="dietaryRequirements"
          label="Dietary Requirements"
          rows="3"
          component={TextArea}
        />

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
  }
}

export default reduxForm({
  form: "singleGuestForm"
})(SingleGuestForm);
