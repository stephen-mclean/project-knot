import React, { Fragment, Component } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import PageWithNav from "../helpers/PageWithNav";
import { dbRef } from "../../firebase";
import NameForm from "./form/NameForm";
import GuestsForm from "./form/GuestsForm";
import Confirmation from "./confirmation/Confirmation";
import { HOME } from "../../routes/routes";

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenParty: null,
      allParties: null,
      showConfirmation: false
    };

    this.loadParties();
  }

  loadParties = () => {
    console.log("load parties");

    const partiesRef = dbRef.ref("parties");
    partiesRef.once("value", snapshot => {
      console.log("here");
      const parties = [];
      snapshot.forEach(party => {
        parties.push({
          id: party.key,
          ...party.val()
        });
      });

      console.log("parties loaded");
      this.setState({
        allParties: parties
      });
    });
  };

  /**
   * Search for a party containing a guest with a matching name.
   */
  onNameFormSubmit = values => {
    console.log("name form submit", values);

    const { name } = values;
    const { allParties } = this.state;

    const nameToFind = name.toLowerCase();
    const foundParty = allParties.find(party => {
      return party.guests.find(guest => {
        const guestsName = guest.name.toLowerCase();

        return guestsName === nameToFind;
      });
    });

    const { partyNotFoundAlert } = this.state;
    if (!foundParty && !partyNotFoundAlert) {
      const notFoundAlert = alerts.showError(
        "We could not find your invite. Please check your spelling and try again."
      );
      this.setState({ partyNotFoundAlert: notFoundAlert });
    } else {
      if (partyNotFoundAlert) {
        alerts.close(partyNotFoundAlert);
      }
      this.setState({ chosenParty: foundParty, partyNotFoundAlert: null });
    }
  };

  onNameFormCancel = () => {
    const { history } = this.props;
    history.push(HOME.path);
  };

  renderNameForm = () => {
    return (
      <NameForm
        onSubmit={this.onNameFormSubmit}
        onCancel={this.onNameFormCancel}
      />
    );
  };

  shouldRenderNameForm = () => {
    const { chosenParty } = this.state;

    return !chosenParty;
  };

  shouldRenderGuestsForm = () => {
    const { chosenParty, showConfirmation } = this.state;

    return !!chosenParty && !showConfirmation;
  };

  onUpdateGuests = updatedGuests => {
    console.log("guests updated", updatedGuests);

    // update db & show confirmation
    this.setState(prevState => ({
      chosenParty: {
        ...prevState.chosenParty,
        guests: updatedGuests
      },
      showConfirmation: true
    }));
  };

  renderGuestsForm = () => {
    const { chosenParty } = this.state;
    return (
      <GuestsForm
        guests={chosenParty.guests}
        updateGuests={this.onUpdateGuests}
      />
    );
  };

  renderConfirmationScreen() {
    const { chosenParty } = this.state;
    return <Confirmation guests={chosenParty.guests} />;
  }

  render() {
    const { showConfirmation } = this.state;
    return (
      <PageWithNav>
        <Fragment>
          <AlertContainer
            template={AlertTemplate}
            closeButton={AlertCloseButton}
          />
          {this.shouldRenderNameForm() && this.renderNameForm()}
          {this.shouldRenderGuestsForm() && this.renderGuestsForm()}
          {showConfirmation && this.renderConfirmationScreen()}
        </Fragment>
      </PageWithNav>
    );
  }
}

export default RSVP;
