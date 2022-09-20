/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
};

const userDataSlice = createSlice({
  name: "user-data-slice",
  initialState,
  reducers: {
    initialUserData(_, { payload }) {
      return {
        user: payload?.user,
        token: payload?.token,
      };
    },
    cleanUserData() {
      return { user: {}, token: "" };
    },
  },
});

export const { initialUserData, cleanUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
