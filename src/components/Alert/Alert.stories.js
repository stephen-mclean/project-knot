import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import { AlertContainer, alerts } from "react-simple-alerts";
import CloseBtn from "./DefaultAlertCloseBtn";
import Template from "./DefaultAlertTemplate";
import "react-simple-alerts/build/main.css";

const stories = storiesOf("Components", module);

const AlertComponent = ({ children }) => <Fragment>{children}</Fragment>;

stories.add("Alert", () => (
  <StoryContainer>
    <Fragment>
      <AlertContainer template={Template} />

      <button
        onClick={() => alerts.show("My alert", { closeButton: CloseBtn })}
      >
        show alert
      </button>
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
