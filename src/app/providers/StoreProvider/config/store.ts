import { configureStore, type ReducersMapObject } from "@reduxjs/toolkit";
import { type StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
