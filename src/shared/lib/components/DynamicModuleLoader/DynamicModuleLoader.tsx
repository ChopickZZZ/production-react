import { type Reducer } from "@reduxjs/toolkit";
import { type ReduxStoreWithManager } from "app/providers/StoreProvider";
import { type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { type FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [Name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} REDUCER` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} REDUCER` });
        });
      }
    };

    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
