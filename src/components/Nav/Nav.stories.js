import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import Nav from "./Nav";
import { H4 } from "../Fonts/Secondary";

const stories = storiesOf("Components", module);

stories.add("Nav", () => (
  <StoryContainer>
    <Nav>
      <H4>Title</H4>
    </Nav>
  </StoryContainer>
));
