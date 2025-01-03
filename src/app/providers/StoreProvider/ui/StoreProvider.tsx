import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../index";
import { type PartialReducersMap, type StateSchema } from "../config/StateSchema";
import { type ReducersMapObject, type DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: PartialReducersMap;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
