import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { dbRef } from "../../firebase";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import { S1 } from "../../components/Fonts/Fonts";

const NumResponsesText = styled(S1)`
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
`;

const TD = styled.td`
  text-align: center;
`;

const Responses = () => {
  const [allGuests, setAllGuests] = useState([]);
  const [numParties, setNumParties] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [numPartyResponses, setNumPartyResponses] = useState(0);

  useEffect(() => {
    const partiesRef = dbRef.ref("parties");
    partiesRef.once(
      "value",
      snapshot => {
        const guests = [];
        let responses = 0;
        let parties = 0;
        snapshot.forEach(party => {
          const partyVal = party.val();
          guests.push(...partyVal.guests);
          parties++;
          if (partyVal.hasResponded) {
            responses++;
          }
        });

        setAllGuests(guests);
        setNumPartyResponses(responses);
        setNumParties(parties);
        setIsLoading(false);
      },
      error => {
        console.error("Could not retrieve parties", error);
      }
    );
  });

  return (
    <Fragment>
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <Fragment>
          <NumResponsesText>
            Party Responses: {numPartyResponses} / {numParties}
          </NumResponsesText>
          <Table>
            <thead>
              <th>Name</th>
              <th>Attending Wedding</th>
              <th>Meal</th>
              <th>Plus One</th>
              <th>Plus One Name</th>
              <th>Plus One Meal</th>
              <th>Attending After Party</th>
            </thead>
            <tbody>
              {allGuests.map(guest => (
                <tr>
                  <TD>{guest.name}</TD>
                  <TD>{guest.isAttending || "-"}</TD>
                  <TD>{guest.meal}</TD>
                  <TD>{guest.isBringingPlusOne || "-"}</TD>
                  <TD>{guest.guestName || "-"}</TD>
                  <TD>{guest.guestMeal || "-"}</TD>
                  <TD>{guest.isAttendingAfterParty || "-"}</TD>
                </tr>
              ))}
            </tbody>
          </Table>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Responses;
