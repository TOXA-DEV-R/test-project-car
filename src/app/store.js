/** @format */

import { configureStore } from "@reduxjs/toolkit";
import carSliceModel from "../features/car-slice-model";
import loginModalSlice from "../features/login-modal-slice";
import userDataSlice from "../features/user-data-slice";

export const store = configureStore({
  reducer: {
    carSliceModel,
    loginModalSlice,
    userDataSlice,
  },
});
