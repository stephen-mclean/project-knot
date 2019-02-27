import React, { PureComponent } from "react";
import styled from "styled-components";
import { H2 } from "../../components/Fonts/Secondary";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles
} from "../../components/Button/Button";
import { VerticalButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import { RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY } from "../../routes/routes";

const HomeContainer = styled.section`
  margin-top: 9rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const MainTitle = styled(H2)`
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
        <MainTitle>Catriona & Darren</MainTitle>
        <VerticalButtonGroup center>
          <Button buttonStyle={ButtonStyles.PRIMARY} onClick={this.goToRSVP}>
            RSVP
          </Button>
          <Button
            buttonType={ButtonTypes.OUTLINE}
            onClick={this.goToWeddingDay}
          >
            Wedding Day Info
          </Button>
          <Button
            buttonType={ButtonTypes.OUTLINE}
            onClick={this.goToAfterParty}
          >
            After Party Info
          </Button>
        </VerticalButtonGroup>
      </HomeContainer>
    );
  }
}

export default Home;
