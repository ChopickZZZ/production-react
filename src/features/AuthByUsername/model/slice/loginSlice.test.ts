import { type LoginSchema } from "../types/LoginSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", async () => {
    const state: DeepPartial<LoginSchema> = { username: "" };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername("Albert"))).toStrictEqual({
      username: "Albert",
    });
  });

  test("test set password", async () => {
    const state: DeepPartial<LoginSchema> = { password: "" };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword("123"))).toStrictEqual({
      password: "123",
    });
  });
});
