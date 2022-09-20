/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const loginModalSlice = createSlice({
  name: "navbar-modal",
  initialState,
  reducers: {
    loginModalOpen(state) {
      state.isOpen = true;
    },
    loginModalClose(state) {
      state.isOpen = false;
    },
  },
});

export const { loginModalOpen, loginModalClose } = loginModalSlice.actions;
export default loginModalSlice.reducer;
