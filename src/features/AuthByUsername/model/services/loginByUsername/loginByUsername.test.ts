import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
  test("success login", async () => {
    const userValue = { id: "1", username: "123" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const asynThunk = new TestAsyncThunk(loginByUsername);
    const result = await asynThunk.callThunk({ username: "123", password: "123" });

    expect(asynThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(asynThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
    expect(JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY))).toStrictEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const asynThunk = new TestAsyncThunk(loginByUsername);
    const result = await asynThunk.callThunk({ username: "123", password: "123" });

    expect(asynThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
