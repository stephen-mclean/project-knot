import React, { Fragment } from "react";
import styled from "styled-components";
import { H5, S1 } from "../../../components/Fonts/Fonts";
import GuestDetails from "./GuestDetails";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeading = styled(H5)`
  margin-bottom: 0.25rem;
`;

const SubHeading = styled(S1)`
  color: ${props => props.theme.colors.foreground.tertiary};
`;

export default ({ guests }) => (
  <Fragment>
    <HeadingContainer>
      <MainHeading>You're all set!</MainHeading>
      <SubHeading>
        Thank you for responding. We hope you have a wonderful time.
      </SubHeading>
    </HeadingContainer>
    {guests.map(guest => (
      <GuestDetails key={guest.name} guest={guest} />
    ))}
  </Fragment>
);
