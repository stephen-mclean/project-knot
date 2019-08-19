import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import RadioGroup from "../../../components/Radio/RadioGroup";
import TextArea from "../../../components/TextArea/TextArea";
import Input from "../../../components/Input/Input";
import { B2 } from "../../../components/Fonts/Fonts";
import Button, { STYLES, TYPES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";
import { required } from "../../../form/validations";

const ChildrensMenuDesc = styled(B2)`
  margin-bottom: 2rem;
  border-left: 4px solid ${props => props.theme.colors.foreground.secondary};
  padding-left: 0.5rem;
`;

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
      initialValues: { plusOne, isChild },
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

        {isChild && (
          <ChildrensMenuDesc>
            For any of our smaller guests they can decide on the day whether to
            have half portion of the main meal or a children’s menu will also be
            available
          </ChildrensMenuDesc>
        )}

        {isAttending && isAttending === "Yes" && !isChild && (
          <div>
            <Field
              name="meal"
              label="Please select your main course"
              options={[
                {
                  label:
                    "8oz Roasted Sirloin of Prime Irish Beef, Celeriac & Horseradish, Red Wine & Roasted Onion Gravy",
                  value: "Beef"
                },
                {
                  label:
                    "Oven Baked Pave of Salmon, Pinot Grigio Leeks, Saffron & Prawn Veloute",
                  value: "Salmon"
                }
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

                {isBringingPlusOne && isBringingPlusOne === "Yes" && (
                  <div>
                    <Field
                      name="guestName"
                      label="Please enter your guests full name"
                      component={Input}
                      validate={required}
                    />

                    <Field
                      name="guestMeal"
                      label="Please select a main course for your guest"
                      options={[
                        {
                          label:
                            "8oz Roasted Sirloin of Prime Irish Beef, Celeriac & Horseradish, Red Wine & Roasted Onion Gravy",
                          value: "Beef"
                        },
                        {
                          label:
                            "Oven Baked Pave of Salmon, Pinot Grigio Leeks, Saffron & Prawn Veloute",
                          value: "Salmon"
                        }
                      ]}
                      component={RadioGroup}
                      validate={required}
                    />
                    <Field
                      name="guestDietaryRequirements"
                      label="Please advise of any dietary requirements for your guest or if they would prefer
                    a vegetarian option"
                      rows="3"
                      component={TextArea}
                    />
                  </div>
                )}
              </div>
            )}
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
