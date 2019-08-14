import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { B1 } from "../Fonts/Fonts";

const Container = styled.div`
  border: ${props => `1px solid ${props.theme.colors.foreground.quaternary}`};
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  margin-top: 1rem;
`;

class Accordion extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  state = { isExpanded: false };

  toggleIsExpanded = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    const { isExpanded } = this.state;
    const { title, children } = this.props;
    const icon = isExpanded ? "chevron-down" : "chevron-right";
    return (
      <Container onClick={this.toggleIsExpanded}>
        <TitleContainer>
          <B1>{title}</B1>
          <FontAwesomeIcon icon={icon} />
        </TitleContainer>

        {isExpanded && <ContentContainer>{children}</ContentContainer>}
      </Container>
    );
  }
}

export default Accordion;
