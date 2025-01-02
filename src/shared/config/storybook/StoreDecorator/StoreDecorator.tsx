import { type DeepPartial } from "@reduxjs/toolkit";
import { type StoryFn } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type PartialReducersMap } from "app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "features/AuthByUsername";

const defaultAsyncReducers: PartialReducersMap = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: PartialReducersMap) => (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
