import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H5, S1 } from "../../../components/Fonts/Fonts";
import SingleGuestForm from "./SingleGuestForm";

const CurrentGuestHeader = styled.div`
  margin-bottom: 1rem;
`;

const GuestName = styled(H5)`
  margin-bottom: 0.25rem;
`;

const GuestNumberIndicator = styled(S1)`
  color: ${props => props.theme.colors.foreground.tertiary};
`;

class GuestsForm extends Component {
  static propTypes = {
    guests: PropTypes.array.isRequired,
    updateGuests: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const { guests } = props;
    this.state = {
      currentGuestIdx: 0,
      numberOfGuests: guests.length,
      updatedGuests: []
    };
  }

  updateGuestChoices = values => {
    const { currentGuestIdx, updatedGuests, numberOfGuests } = this.state;
    const { guests, updateGuests } = this.props;
    const currentGuest = guests[currentGuestIdx];

    const updatedGuest = {
      ...currentGuest,
      ...values
    };

    const newUpdatedGuests = [...updatedGuests, updatedGuest];

    if (currentGuestIdx === numberOfGuests - 1) {
      console.log("last guest, calling update");
      updateGuests(newUpdatedGuests);
    } else {
      this.setState(prevState => ({
        currentGuestIdx: prevState.currentGuestIdx + 1,
        updatedGuests: newUpdatedGuests
      }));

      console.log("guests updated", newUpdatedGuests);
    }
  };

  onGuestFormBackBtnClick = () => {
    // If first guest, cancel, otherwise go to previous guest
    console.log("on guest form cancel");
  };

  renderGuestForm = () => {
    return (
      <SingleGuestForm
        onSubmit={this.updateGuestChoices}
        onCancel={this.onGuestFormBackBtnClick}
      />
    );
  };

  renderCurrentGuestHeader = () => {
    const { currentGuestIdx, numberOfGuests } = this.state;
    const { guests } = this.props;

    const currentGuest = guests[currentGuestIdx];
    const guestNumberIndicatorText = `${currentGuestIdx + 1}/${numberOfGuests}`;
    return (
      <CurrentGuestHeader>
        <GuestName>{currentGuest.name}</GuestName>
        <GuestNumberIndicator>{guestNumberIndicatorText}</GuestNumberIndicator>
      </CurrentGuestHeader>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderCurrentGuestHeader()}
        {this.renderGuestForm()}
      </Fragment>
    );
  }
}

export default GuestsForm;
