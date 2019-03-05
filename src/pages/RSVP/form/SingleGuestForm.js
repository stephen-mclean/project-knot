import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import RadioGroup from "../../../components/Radio/RadioGroup";
import TextArea from "../../../components/TextArea/TextArea";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";

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
    const {
      handleSubmit,
      onCancel,
      invalid,
      submitting,
      pristine,
      isAttending
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onGuestFormSubmit)}>
        <Field
          name="isAttending"
          label="Is attending wedding day?"
          options={["Yes", "No"]}
          validate={required}
          component={RadioGroup}
        />

        {isAttending && isAttending === "Yes" && (
          <Field
            name="meal"
            label="Meal Choice"
            options={["Lamb", "Salmon"]}
            component={RadioGroup}
            validate={required}
          />
        )}

        <Field
          name="isAttendingAfterParty"
          label="Is attending after party?"
          options={["Yes", "No"]}
          validate={required}
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
  }
}

SingleGuestForm = reduxForm({
  form: "singleGuestForm"
})(SingleGuestForm);

const selector = formValueSelector("singleGuestForm");
const mapStateToProps = state => {
  const isAttending = selector(state, "isAttending");
  return {
    isAttending
  };
};

SingleGuestForm = connect(mapStateToProps)(SingleGuestForm);

export default SingleGuestForm;
