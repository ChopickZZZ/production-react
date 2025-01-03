import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions, type User } from "entities/User";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkApi) => {
  try {
    const { data } = await axios.post("http://localhost:8000/login", authData);

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
    thunkApi.dispatch(userActions.setAuthData(data));

    return data;
  } catch (e) {
    return thunkApi.rejectWithValue("error");
  }
});
