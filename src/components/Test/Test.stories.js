import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import Test from "./Test";

const stories = storiesOf("Components", module);

stories.add("Test", () => (
  <StoryContainer>
    <Test />
  </StoryContainer>
));
