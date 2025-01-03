import { type AsyncThunkAction } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";

type ActionCreatorType<ReturnValue, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<ReturnValue, Arg, RejectedValue> {
  readonly dispatch: jest.MockedFn<any>;
  readonly getState: () => StateSchema;
  readonly actionCreator: ActionCreatorType<ReturnValue, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<ReturnValue, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
