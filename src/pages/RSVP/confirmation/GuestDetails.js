import React from "react";
import styled from "styled-components";
import { H6, B1, B2 } from "../../../components/Fonts/Fonts";

const GuestContainer = styled.section`
  margin-bottom: 1rem;
`;

const GuestName = styled(H6)`
  margin-bottom: 1rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const AnswerText = styled(B2)`
  color: ${props => props.theme.colors.foreground.tertiary};
`;

export default ({ guest }) => (
  <GuestContainer>
    <GuestName>{guest.name}</GuestName>
    <AnswerContainer>
      <B1>Is attending?</B1>
      <AnswerText>{guest.isAttending}</AnswerText>
    </AnswerContainer>

    <AnswerContainer>
      <B1>Is attending after party?</B1>
      <AnswerText>{guest.isAttendingAfterParty}</AnswerText>
    </AnswerContainer>

    <AnswerContainer>
      <B1>Meal Choice</B1>
      <AnswerText>{guest.meal}</AnswerText>
    </AnswerContainer>
  </GuestContainer>
);
