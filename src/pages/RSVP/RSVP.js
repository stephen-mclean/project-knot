import React, { Fragment, Component } from "react";
import styled from "styled-components";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import { dbRef } from "../../firebase";
import NameForm from "./form/NameForm";
import GuestsForm from "./form/GuestsForm";
import MultiMatchForm from "./form/MultiMatchForm";
import Confirmation from "./confirmation/Confirmation";
import { HOME } from "../../routes/routes";

const RetryContent = styled.span`
  text-decoration: underline;
`;
const RetryButton = ({ close }) => (
  <RetryContent onClick={close}>Retry</RetryContent>
);

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenParty: null,
      potentialParties: null,
      allParties: null,
      showConfirmation: false,
      isLoading: false,
      loadingPartiesErrorId: null
    };
  }

  componentDidMount() {
    this.loadParties();
  }

  goToHome = () => {
    const { history } = this.props;
    history.push(HOME.path);
  };

  loadParties = () => {
    const { loadingPartiesErrorId } = this.state;

    if (loadingPartiesErrorId) {
      alerts.close(loadingPartiesErrorId);
    }

    this.setState({ isLoading: true, loadingPartiesErrorId: null });

    const partiesRef = dbRef.ref("parties");
    partiesRef.once(
      "value",
      snapshot => {
        const parties = [];
        snapshot.forEach(party => {
          parties.push({
            ...party.val(),
            id: party.key
          });
        });

        this.setState({
          allParties: parties,
          isLoading: false
        });
      },
      error => {
        console.error("Could not retrieve parties", error);
        const loadingPartiesErrorId = alerts.showError(
          "An error has occurred. Please try again.",
          {
            closeButton: RetryButton,
            onClose: () => {
              this.setState({ loadingPartiesErrorId: null }, () =>
                this.loadParties()
              );
            }
          }
        );
        this.setState({
          loadingPartiesErrorId,
          isLoading: false
        });
      }
    );
  };

  getPartyWithGuestName = name => {
    const { allParties } = this.state;

    const nameToFind = name.toLowerCase().replace(/ /g, "");
    return allParties.filter(party => {
      return party.guests.find(guest => {
        const guestsName = guest.name.toLowerCase().replace(/ /g, "");

        return guestsName === nameToFind;
      });
    });
  };

  /**
   * Search for a party containing a guest with a matching name.
   */
  onNameFormSubmit = values => {
    const { name } = values;
    const potentialParties = this.getPartyWithGuestName(name);
    let foundParty;
    if (potentialParties.length === 1) {
      foundParty = potentialParties[0];
    } else if (potentialParties.length > 1) {
      this.setState({ potentialParties });
      return;
    }

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
    } else if (foundParty) {
      if (partyNotFoundAlert) {
        alerts.close(partyNotFoundAlert);
      }
      this.setState({ chosenParty: foundParty, partyNotFoundAlert: null });
    }
  };

  renderNameForm = () => {
    return (
      <NameForm onSubmit={this.onNameFormSubmit} onCancel={this.goToHome} />
    );
  };

  shouldRenderNameForm = () => {
    const { allParties, chosenParty, potentialParties, isLoading } = this.state;

    return (
      allParties &&
      allParties.length &&
      !chosenParty &&
      !potentialParties &&
      !isLoading
    );
  };

  shouldRenderGuestsForm = () => {
    const { chosenParty, showConfirmation, isLoading } = this.state;

    return !!chosenParty && !showConfirmation && !isLoading;
  };

  shouldRenderMultiMatchForm = () => {
    const { chosenParty, potentialParties } = this.state;

    return !chosenParty && potentialParties && potentialParties.length;
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

  renderGuestsForm = () => {
    const { chosenParty } = this.state;
    return (
      <GuestsForm
        guests={chosenParty.guests}
        updateGuests={this.onUpdateGuests}
        onCancel={this.goToHome}
      />
    );
  };

  renderConfirmationScreen() {
    const { chosenParty } = this.state;
    return (
      <Confirmation guests={chosenParty.guests} goToHome={this.goToHome} />
    );
  }

  onChooseSingleParty = party => {
    this.setState({ chosenParty: party, potentialParties: null });
  };

  renderMultiMatchForm = () => {
    const { potentialParties } = this.state;

    return (
      <MultiMatchForm
        potentialParties={potentialParties}
        onChooseParty={this.onChooseSingleParty}
      />
    );
  };

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
          {this.shouldRenderMultiMatchForm() && this.renderMultiMatchForm()}
        </Fragment>
      </PageWithNav>
    );
  }
}

export default RSVP;
