import { counterActions, counterReducer } from "./counterSlice";

describe("CounterSlice test", () => {
  test("Should increase value by 1", () => {
    const state = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("Should decrease value by 1", () => {
    const state = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("Should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
