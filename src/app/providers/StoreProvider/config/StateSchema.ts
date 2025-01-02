import {
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
  type EnhancedStore,
  type Reducer,
} from "@reduxjs/toolkit";
import { type UserSchema } from "entities/User";
import { type LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user?: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  getReducerMap: () => ReducersMapObject<StateSchema>;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
