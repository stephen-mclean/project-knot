import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import { AlertContainer, alerts } from "./";

const stories = storiesOf("Components", module);

const AlertComponent = ({ children }) => <Fragment>{children}</Fragment>;

stories.add("Alert", () => (
  <StoryContainer>
    <Fragment>
      <AlertContainer />

      <button onClick={() => alerts.show("My alert")}>show alert</button>
      <button
        onClick={() =>
          alerts.show(<AlertComponent>Custom alert component</AlertComponent>)
        }
      >
        show alert component
      </button>
    </Fragment>
  </StoryContainer>
));
