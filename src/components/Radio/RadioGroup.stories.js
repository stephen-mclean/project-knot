import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import StoryContainer from "../StorybookContainer/StorybookContainer";
import RadioGroup from "./RadioGroup";

const store = new Store({
  inputOneVal: ""
});

const stories = storiesOf("Components", module);
stories.add("Radio", () => {
  const onInputOneChange = e => {
    console.log("change", e.target.value);
    store.set({ inputOneVal: e.target.value });
  };
  return (
    <StoryContainer>
      <State store={store}>
        {state => [
          <RadioGroup
            label="Radio"
            options={["One", "Two"]}
            input={{ value: state.inputOneVal, onChange: onInputOneChange }}
          />
        ]}
      </State>
    </StoryContainer>
  );
});
