import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./loginCrud";
import { USER_LOGIN_TYPE } from "../../../constants/asyncActionTypes";

export const userLogin = createAsyncThunk(USER_LOGIN_TYPE, login, {
  isToast: true,
});
