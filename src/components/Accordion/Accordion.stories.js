import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import Accordion from "./Accordion";

const stories = storiesOf("Components", module);

const testContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed massa placerat, pretium libero in, viverra mi.";
stories.add("Accordion", () => (
  <StoryContainer>
    <Accordion title="Title" content={testContent} />
  </StoryContainer>
));
