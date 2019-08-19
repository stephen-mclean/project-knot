import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Themes from "./theme/Theme";
import { GlobalStyle } from "./theme/GlobalStyle";
import {
  HOME,
  RSVP_ROUTE,
  WEDDING_DAY,
  AFTER_PARTY,
  RESPONSES
} from "./routes/routes";
import "./firebase";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={Themes.main}>
          <Fragment>
            <Route exact path={HOME.path} component={HOME.component} />
            <Route
              exact
              path={RSVP_ROUTE.path}
              component={RSVP_ROUTE.component}
            />
            <Route
              exact
              path={WEDDING_DAY.path}
              component={WEDDING_DAY.component}
            />
            <Route
              exact
              path={AFTER_PARTY.path}
              component={AFTER_PARTY.component}
            />
            <Route
              exact
              path={RESPONSES.path}
              component={RESPONSES.component}
            />
            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
