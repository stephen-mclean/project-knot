import React, { PureComponent } from "react";
import styled from "styled-components";
import { H2 } from "../../components/Fonts/Secondary";
import { S1 } from "../../components/Fonts/Fonts";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles
} from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";
import { VerticalButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import { RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY } from "../../routes/routes";
import banner from "./Banner.jpg";

const Banner = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`;

const HomeContainer = styled(PageContainer)`
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 9rem;
  }
`;

const MainTitle = styled(H2)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SubTitle = styled(S1)`
  color: ${props => props.theme.colors.foreground.secondary};
  margin-bottom: 1rem;
  text-align: center;
`;

class Home extends PureComponent {
  goToRSVP = () => {
    const { history } = this.props;
    history.push(RSVP_ROUTE.path);
  };

  goToWeddingDay = () => {
    const { history } = this.props;
    history.push(WEDDING_DAY.path);
  };

  goToAfterParty = () => {
    const { history } = this.props;
    history.push(AFTER_PARTY.path);
  };

  render() {
    return (
      <HomeContainer>
        <Banner src={banner} alt="Banner" />
        <MainTitle>Catriona & Darren</MainTitle>
        <SubTitle>
          Welcome to our wedding website. We’ve created this website as a
          helpful resource for all of the need-to-know details in the lead up to
          our big day. Here you’ll find the schedule for the day, venue
          directions, along with accommodation and transport options.
        </SubTitle>
        <SubTitle>
          Don’t forget to RSVP and let us know about any dietary preferences
          too.
        </SubTitle>
        <SubTitle>
          We are so looking forward to celebrating with you all!
        </SubTitle>
        <VerticalButtonGroup center>
          <Button
            buttonType={ButtonTypes.OUTLINE}
            onClick={this.goToWeddingDay}
          >
            Wedding Day
          </Button>
          <Button
            buttonType={ButtonTypes.OUTLINE}
            onClick={this.goToAfterParty}
          >
            After Party
          </Button>
          <Button buttonStyle={ButtonStyles.PRIMARY} onClick={this.goToRSVP}>
            RSVP
          </Button>
        </VerticalButtonGroup>
      </HomeContainer>
    );
  }
}

export default Home;
