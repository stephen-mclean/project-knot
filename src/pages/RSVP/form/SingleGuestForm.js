import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import RadioGroup from "../../../components/Radio/RadioGroup";
import TextArea from "../../../components/TextArea/TextArea";
import Input from "../../../components/Input/Input";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";

class SingleGuestForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    cancelBtnLabel: PropTypes.func.isRequired,
    initialValues: PropTypes.object
  };

  static defaultProps = {
    initialValues: {}
  };

  onGuestFormSubmit = values => {
    const { onSubmit, reset } = this.props;
    onSubmit(values);
    reset();
  };

  onGuestFormCancel = () => {
    const { onCancel, reset } = this.props;
    onCancel();
    reset();
  };

  render() {
    const {
      handleSubmit,
      invalid,
      submitting,
      isAttending,
      cancelBtnLabel,
      initialValues: { plusOne },
      isBringingPlusOne
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onGuestFormSubmit)}>
        <Field
          name="isAttending"
          label="Will you be joining us for our wedding ceremony?"
          options={[
            { label: "Wouldn’t miss it for the World!", value: "Yes" },
            { label: "Sorry, I will have to miss the fun", value: "No" }
          ]}
          validate={required}
          component={RadioGroup}
        />

        {isAttending && isAttending === "Yes" && (
          <div>
            {plusOne && (
              <div>
                <Field
                  name="isBringingPlusOne"
                  label="Will you be bringing a guest?"
                  options={[
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" }
                  ]}
                  component={RadioGroup}
                  validate={required}
                />

                {isBringingPlusOne && (
                  <Field
                    name="guestName"
                    label="Please enter your guests full name"
                    component={Input}
                    validate={required}
                  />
                )}
              </div>
            )}
            <Field
              name="meal"
              label="Please select your main course"
              options={[
                { label: "Beef", value: "Beef" },
                { label: "Salmon", value: "Salmon" }
              ]}
              component={RadioGroup}
              validate={required}
            />
            <Field
              name="dietaryRequirements"
              label="Please advise of any dietary requirements or if you would prefer
              a vegetarian option"
              rows="3"
              component={TextArea}
            />
          </div>
        )}

        <Field
          name="isAttendingAfterParty"
          label="Will you be joining us for the after party?"
          options={[
            { label: "Let the good times roll!", value: "Yes" },
            { label: "Sorry, the show must go on without me", value: "No" }
          ]}
          validate={required}
          component={RadioGroup}
        />

        <ButtonGroup right>
          <Button buttonType={TYPES.OUTLINE} onClick={this.onGuestFormCancel}>
            {cancelBtnLabel()}
          </Button>
          <Button
            buttonStyle={STYLES.PRIMARY}
            type="submit"
            disabled={invalid || submitting}
          >
            Next
          </Button>
        </ButtonGroup>
      </form>
    );
  }
}

SingleGuestForm = reduxForm({
  form: "singleGuestForm",
  enableReinitialize: true
})(SingleGuestForm);

const selector = formValueSelector("singleGuestForm");
const mapStateToProps = (state, { initialValues }) => {
  const isAttending = selector(state, "isAttending");
  const isBringingPlusOne = selector(state, "isBringingPlusOne");

  return {
    isAttending,
    isBringingPlusOne,
    initialValues
  };
};

SingleGuestForm = connect(mapStateToProps)(SingleGuestForm);

export default SingleGuestForm;
