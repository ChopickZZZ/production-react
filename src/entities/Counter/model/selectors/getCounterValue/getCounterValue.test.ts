import { getCounterValue } from "./getCounterValue";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";

describe("Get counter value", () => {
  test("Should return counter value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
