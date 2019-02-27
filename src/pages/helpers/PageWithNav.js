import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { H4 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer/PageContainer";
import { getTitleByPath } from "../../routes/routes";

const PageWithNav = ({ children, location }) => (
  <Fragment>
    <Nav>
      <H4>{getTitleByPath(location.pathname)}</H4>
    </Nav>
    <PageContainer>{children}</PageContainer>
  </Fragment>
);

export default withRouter(PageWithNav);
