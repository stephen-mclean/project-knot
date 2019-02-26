import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import TextArea from "./TextArea";

const store = new Store({
  inputOneVal: ""
});

const stories = storiesOf("Components", module);
stories.add("TextArea", () => {
  const onInputOneChange = e => store.set({ inputOneVal: e.target.value });
  return (
    <StoryContainer>
      <State store={store}>
        {state => [
          <TextArea
            label="Text Area"
            placeholder="Placeholder"
            rows="4"
            input={{ value: state.inputOneVal, onChange: onInputOneChange }}
          />
        ]}
      </State>
    </StoryContainer>
  );
});
