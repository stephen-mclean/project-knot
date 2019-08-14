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

const P = styled(B2)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

export default () => (
  <PageWithNav>
    <Fragment>
      <HeadingContainer>
        <MainHeader>12th October 2019</MainHeader>
        <VenueInfo>Arnolds Hotel</VenueInfo>
      </HeadingContainer>
      <Description>
        If your feet and head are not too delicate, we would be delighted if you
        could join us for some more fun on Saturday, 12th October in Arnolds
        Hotel, Dunfanaghy. We will be meeting from 6.30pm with food served at
        7pm and music to follow.
      </Description>

      <Accordion title="Accommodation">
        <P>
          For those that would like to stay overnight, Arnolds Hotel have
          offered a special rate of €85 B&B per double/twin room based on 2
          adults sharing and €75 B&B per single occupancy room. Please quote “Mc
          Hugh/Kerr wedding” when booking to avail of the discount (Tel
          074-9136208)
        </P>
      </Accordion>
      <Accordion title="Directions">
        <iframe
          title="Directions"
          width="300"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=arnolds%20hotel&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
        />
      </Accordion>
      <Accordion title="Transport">
        <P>Dunfanaghy Taxi 085 7870164</P>
      </Accordion>
    </Fragment>
  </PageWithNav>
);
