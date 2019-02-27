import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "../helpers/PageWithNav";
import { H5, S1, B2 } from "../../components/Fonts/Fonts";
import Accordion from "../../components/Accordion/Accordion";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
`;

const VenueInfo = styled(S1)`
  color: ${props => props.theme.colors.foreground.tertiary};
`;

const Description = styled(B2)`
  margin-bottom: 1rem;
`;

export default () => (
  <PageWithNav>
    <Fragment>
      <HeadingContainer>
        <MainHeader>After Party</MainHeader>
        <VenueInfo>Arnolds Hotel 12/10/19</VenueInfo>
      </HeadingContainer>
      <Description>Description here</Description>

      <Accordion title="Lodging" content="Lodging info here" />
      <Accordion title="Transport" content="Transport info here" />
      <Accordion title="Activities" content="Activities info here" />
    </Fragment>
  </PageWithNav>
);
