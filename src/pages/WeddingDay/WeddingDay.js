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

const HotelName = styled(B2)`
  text-decoration: underline;
`;

export default () => (
  <PageWithNav>
    <Fragment>
      <HeadingContainer>
        <MainHeader>11th October 2019</MainHeader>
        <VenueInfo>Rock Hill House</VenueInfo>
      </HeadingContainer>
      <Description>
        Our wedding ceremony will take place at 2pm in The Gallery at Rockhill
        House and the evening reception will follow in Rockhill House.
      </Description>

      <Accordion title="Accommodation">
        <P>
          There are a limited number of bedrooms available at Rockhill House and
          we would be delighted to have as many of our friends and family stay
          with us. If you are interested in reserving a room please contact
          Catriona (086-3777948) or Darren (085-1319941).
        </P>

        <P>
          Alternatively, we have secured special rates in the following hotels,
          both of which are 5-8mins drive from Rockhill House. If making a
          reservation at either hotel please quote “Mc Hugh/Kerr wedding” to
          avail of their special rate.
        </P>

        <P>
          <HotelName>Radisson Hotel, Letterkenny (074-9194444)</HotelName>
          €84 B&B per double/twin room based on 2 adults sharing or €70 B&B per
          single occupancy room.
        </P>

        <P>
          <HotelName>Station House Hotel, Letterkenny (074-9123100)</HotelName>
          €60 B&B per person sharing or €80 B&B for single occupancy room.
        </P>
      </Accordion>

      <Accordion title="Directions">
        <iframe
          title="Directions"
          width="300"
          height="300"
          src="https://maps.google.com/maps?q=rock%20hill%20house&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
        />
      </Accordion>

      <Accordion title="Transport">
        <P>
          A bus will be available to take guests from Rockhill House to The
          Radisson or Station House Hotel between 1-2am. For any guests that
          would like to depart earlier in the evening local taxis will be
          available.
        </P>

        <P>Letterkenny Cabs 074 9127000</P>
        <P>High Road Taxi Cabs 086 2462355</P>
      </Accordion>
    </Fragment>
  </PageWithNav>
);
