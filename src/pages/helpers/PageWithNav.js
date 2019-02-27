import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import { H4 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer/PageContainer";

export default ({ children }) => (
  <Fragment>
    <Nav>
      <H4>Title</H4>
    </Nav>
    <PageContainer>{children}</PageContainer>
  </Fragment>
);
