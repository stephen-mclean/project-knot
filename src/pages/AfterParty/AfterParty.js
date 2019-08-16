import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "../helpers/PageWithNav";
import { H5, H6, B2 } from "../../components/Fonts/Fonts";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
`;

const VenueInfo = styled(H6)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.tertiary};
`;

const SectionTitle = styled(H6)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.background.quintenary};
`;

const P = styled(B2)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

const DirectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DirectionsFrame = styled.iframe`
  border: none;
`;

export default () => (
  <PageWithNav>
    <Fragment>
      <HeadingContainer>
        <MainHeader>12th October 2019</MainHeader>
        <VenueInfo>Arnolds Hotel</VenueInfo>
        <B2>
          If your feet and head are not too delicate, we would be delighted if
          you could join us for some more fun on Saturday, 12th October in
          Arnolds Hotel, Dunfanaghy. We will be meeting from 6pm with food
          served at 6.30pm and music to follow.
        </B2>
      </HeadingContainer>

      <SectionTitle>Accomodation</SectionTitle>
      <P>
        For those that would like to stay overnight, Arnolds Hotel have offered
        a special rate of €85 B&B per double/twin room based on 2 adults sharing
        and €75 B&B per single occupancy room.
      </P>
      <P>
        Please quote “Mc Hugh/Kerr wedding” when booking to avail of the
        discount (Tel 074-9136208)
      </P>

      <SectionTitle>Directions</SectionTitle>
      <DirectionsContainer>
        <DirectionsFrame
          title="Directions"
          width="300"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=arnolds%20hotel&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
        />
      </DirectionsContainer>

      <SectionTitle>Transport</SectionTitle>
      <P>Dunfanaghy Taxi 085 7870164</P>
    </Fragment>
  </PageWithNav>
);
