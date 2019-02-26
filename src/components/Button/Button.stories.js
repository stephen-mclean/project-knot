import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import Button, { TYPES, STYLES } from "./Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

const stories = storiesOf("Components", module);

stories.add("Button", () => (
  <StoryContainer>
    <ButtonGroup left>
      <Button>Button</Button>
      <Button buttonStyle={STYLES.PRIMARY}>Primary</Button>
      <Button buttonStyle={STYLES.ACCENT}>Accent</Button>
    </ButtonGroup>

    <ButtonGroup left>
      <Button disabled>Button</Button>
      <Button disabled buttonStyle={STYLES.PRIMARY}>
        Primary
      </Button>
      <Button disabled buttonStyle={STYLES.ACCENT}>
        Accent
      </Button>
    </ButtonGroup>

    <ButtonGroup left>
      <Button buttonType={TYPES.OUTLINE}>Button</Button>
    </ButtonGroup>

    <ButtonGroup left>
      <Button buttonType={TYPES.OUTLINE} disabled>
        Button
      </Button>
    </ButtonGroup>
  </StoryContainer>
));
