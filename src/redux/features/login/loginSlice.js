import {  createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./loginAsyncAction";

const initialState = {
  loading: false,
  userData: {},
  isLoggedin: false,

};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearLoginState: (state) => {
      state.loading = false;
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder

      // login

      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.userData = {};
        state.isLoggedin = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedin = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.isLoggedin = false;
      });
  },
});

export const { clearLoginState } = loginSlice.actions;

export default loginSlice.reducer;
