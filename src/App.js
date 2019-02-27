import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Themes from "./theme/Theme";
import { GlobalStyle } from "./theme/GlobalStyle";
import Home from "./pages/Home/Home";
import RSVP from "./pages/RSVP/RSVP";
import WeddingDay from "./pages/WeddingDay/WeddingDay";
import AfterParty from "./pages/AfterParty/AfterParty";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={Themes.main}>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/rsvp" component={RSVP} />
            <Route exact path="/wedding" component={WeddingDay} />
            <Route exact path="/after" component={AfterParty} />
            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
