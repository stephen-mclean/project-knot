import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/GlobalStyle";
import Themes from "../../theme/Theme";

export default ({ children }) => (
  <ThemeProvider theme={Themes.main}>
    <Fragment>
      {children}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);
