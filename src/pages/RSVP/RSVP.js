import React, { Fragment, Component } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
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
      showConfirmation: false,
      isLoading: false
    };
  }

  componentDidMount() {
    this.loadParties();
  }

  loadParties = () => {
    console.log("load parties");

    this.setState({ isLoading: true });

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
        allParties: parties,
        isLoading: false
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
    } else if (foundParty && foundParty.hasResponded) {
      // Already RSVP'd, show confirmation
      this.setState({ chosenParty: foundParty, showConfirmation: true });
      alerts.showSuccess(
        "You have already responded. Please find your details below."
      );
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
    const { chosenParty, isLoading } = this.state;

    return !chosenParty && !isLoading;
  };

  shouldRenderGuestsForm = () => {
    const { chosenParty, showConfirmation, isLoading } = this.state;

    return !!chosenParty && !showConfirmation && !isLoading;
  };

  shouldRenderConfirmation = () => {
    const { showConfirmation, isLoading } = this.state;
    return showConfirmation && !isLoading;
  };

  onUpdateGuests = updatedGuests => {
    console.log("guests updated", updatedGuests);

    const currentParty = this.state.chosenParty;
    const updatedParty = {
      ...currentParty,
      guests: updatedGuests,
      hasResponded: true
    };

    this.setState({ isLoading: true });

    const partyRef = dbRef.ref(`parties/${updatedParty.id}`);
    partyRef.set(updatedParty, error => {
      if (error) {
        console.error(error);
      } else {
        console.log("PARTY UPDATED!!");
        this.setState({
          chosenParty: updatedParty,
          showConfirmation: true,
          isLoading: false
        });
      }
    });
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
    const { isLoading } = this.state;
    return (
      <PageWithNav>
        <Fragment>
          <AlertContainer
            template={AlertTemplate}
            closeButton={AlertCloseButton}
          />
          {isLoading && <LoadingIndicator />}
          {this.shouldRenderNameForm() && this.renderNameForm()}
          {this.shouldRenderGuestsForm() && this.renderGuestsForm()}
          {this.shouldRenderConfirmation() && this.renderConfirmationScreen()}
        </Fragment>
      </PageWithNav>
    );
  }
}

export default RSVP;
