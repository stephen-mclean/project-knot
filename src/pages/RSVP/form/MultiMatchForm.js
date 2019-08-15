import React, { useState } from "react";
import styled from "styled-components";
import RadioGroup from "../../../components/Radio/RadioGroup";
import { B1 } from "../../../components/Fonts/Fonts";
import Button, { STYLES } from "../../../components/Button/Button";
import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup";

const Title = styled(B1)`
  margin-bottom: 1rem;
`;

const MultiMatchForm = ({ potentialParties, onChooseParty }) => {
  const [chosenParty, setChosenParty] = useState(null);

  const getPartyDisplayValue = party => {
    return party.guests.reduce((result, guest) => {
      return result === "" ? guest.name : `${result}, ${guest.name}`;
    }, "");
  };

  const options = potentialParties.map(party => ({
    value: party.id,
    label: getPartyDisplayValue(party)
  }));

  const onChosenPartyChange = e => {
    setChosenParty(e.target.value);
  };

  const onNext = () => {
    const chosenPartyValue = potentialParties.find(
      party => party.id === chosenParty
    );
    onChooseParty(chosenPartyValue);
  };

  return (
    <div>
      <Title>
        We have found more than one match in the guest list. Please select the
        correct option from the list below.
      </Title>

      <RadioGroup
        label="Options"
        options={options}
        input={{ value: chosenParty, onChange: onChosenPartyChange }}
      />

      <ButtonGroup right>
        <Button
          buttonStyle={STYLES.PRIMARY}
          disabled={!chosenParty}
          onClick={onNext}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default MultiMatchForm;
