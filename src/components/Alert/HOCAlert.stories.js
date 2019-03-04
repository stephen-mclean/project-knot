import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import { withAlerts } from "react-simple-alerts";
import "react-simple-alerts/build/main.css";

const stories = storiesOf("Components", module);

let ComponentToWrap = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("My alert")}>show alert</button>
  </Fragment>
);

ComponentToWrap = withAlerts(ComponentToWrap);

stories.add("HOC Alert", () => (
  <StoryContainer>
    <ComponentToWrap />
  </StoryContainer>
));
