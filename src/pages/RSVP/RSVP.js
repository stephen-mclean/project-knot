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
    this.setState({ isLoading: true });

    const partiesRef = dbRef.ref("parties");
    partiesRef.once(
      "value",
      snapshot => {
        const parties = [];
        snapshot.forEach(party => {
          parties.push({
            id: party.key,
            ...party.val()
          });
        });

        this.setState({
          allParties: parties,
          isLoading: false
        });
      },
      error => {
        console.error(error);
        // TODO: Show alert / set state
      }
    );
  };

  getPartyWithGuestName = name => {
    const { allParties } = this.state;

    const nameToFind = name.toLowerCase();
    return allParties.find(party => {
      return party.guests.find(guest => {
        const guestsName = guest.name.toLowerCase();

        return guestsName === nameToFind;
      });
    });
  };

  /**
   * Search for a party containing a guest with a matching name.
   */
  onNameFormSubmit = values => {
    const { name } = values;
    const foundParty = this.getPartyWithGuestName(name);

    const { partyNotFoundAlert } = this.state;
    if (!foundParty && !partyNotFoundAlert) {
      const notFoundAlert = alerts.showError(
        "We could not find your invite. Please check your spelling and try again.",
        { onClose: () => this.setState({ partyNotFoundAlert: null }) }
      );
      this.setState({ partyNotFoundAlert: notFoundAlert });
    } else if (foundParty && foundParty.hasResponded) {
      if (partyNotFoundAlert) {
        alerts.close(partyNotFoundAlert);
      }

      // Already RSVP'd, show confirmation
      this.setState({
        chosenParty: foundParty,
        showConfirmation: true,
        partyNotFoundAlert: null
      });
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
    const { chosenParty } = this.state;
    const updatedParty = {
      ...chosenParty,
      guests: updatedGuests,
      hasResponded: true
    };

    this.setState({ isLoading: true });

    const partyRef = dbRef.ref(`parties/${updatedParty.id}`);
    partyRef.set(updatedParty, error => {
      if (error) {
        console.error(error);
        alerts.showError(
          "An error has occurred submitting your response. Please try again"
        );
      } else {
        this.setState({
          chosenParty: updatedParty,
          showConfirmation: true,
          isLoading: false
        });
      }
    });
  };

  onGuestsFormCancel = () => {
    const { history } = this.props;
    history.push(HOME.path);
  };

  renderGuestsForm = () => {
    const { chosenParty } = this.state;
    return (
      <GuestsForm
        guests={chosenParty.guests}
        updateGuests={this.onUpdateGuests}
        onCancel={this.onGuestsFormCancel}
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
