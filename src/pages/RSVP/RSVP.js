import React, { Fragment, Component } from "react";
import PageWithNav from "../helpers/PageWithNav";
import { dbRef } from "../../firebase";
import NameForm from "./form/NameForm";
import { HOME } from "../../routes/routes";

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = { chosenParty: null, allParties: null };

    this.loadParties();
  }

  loadParties = () => {
    console.log("load parties");

    const partiesRef = dbRef.ref("parties");
    partiesRef.once("value", snapshot => {
      const parties = [];
      snapshot.forEach(party => {
        parties.push({
          id: party.key,
          ...party.val()
        });
      });

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
      console.log("searching party", party);
      return party.guests.find(guest => {
        const guestsName = guest.name.toLowerCase();

        return guestsName === nameToFind;
      });
    });

    console.log("found party", foundParty);
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

  render() {
    return (
      <PageWithNav>
        <Fragment>
          {this.shouldRenderNameForm() && this.renderNameForm()}
        </Fragment>
      </PageWithNav>
    );
  }
}

export default RSVP;
