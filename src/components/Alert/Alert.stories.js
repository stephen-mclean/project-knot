import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import CloseBtn from "./DefaultAlertCloseBtn";
import Template from "./DefaultAlertTemplate";

const stories = storiesOf("Components", module);

const AlertComponent = ({ children }) => <Fragment>{children}</Fragment>;

stories.add("Alert", () => (
  <StoryContainer>
    <Fragment>
      <AlertContainer template={Template} closeButton={CloseBtn} />

      <button
        onClick={() =>
          alerts.show("Default", { onClose: id => console.log(`Closed ${id}`) })
        }
      >
        Default
      </button>
      <button onClick={() => alerts.showSuccess("Success")}>Success</button>
      <button onClick={() => alerts.showWarning("Warning")}>Warning</button>
      <button onClick={() => alerts.showError("Error")}>Error</button>
      <button
        onClick={() =>
          alerts.show(<AlertComponent>Custom alert component</AlertComponent>)
        }
      >
        Custom Component
      </button>
      <button
        onClick={() =>
          alerts.show("Without close button", { closeButton: null })
        }
      >
        No close button
      </button>
    </Fragment>
  </StoryContainer>
));
