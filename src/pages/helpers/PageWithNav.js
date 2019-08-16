import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { H3 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer/PageContainer";
import { HOME, getTitleByPath } from "../../routes/routes";

class PageWithNav extends Component {
  goToHome = () => {
    const { history } = this.props;
    history.push(HOME.path);
  };

  render() {
    const { location, children } = this.props;
    return (
      <Fragment>
        <Nav>
          <H3 onClick={this.goToHome}>{getTitleByPath(location.pathname)}</H3>
        </Nav>
        <PageContainer>{children}</PageContainer>
      </Fragment>
    );
  }
}

export default withRouter(PageWithNav);
