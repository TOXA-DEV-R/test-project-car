/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getModels, getModelType, getModelTypes } from "../../api";

export const fetchModels = createAsyncThunk(
  "car-slice-model/fetchModels",
  async () => {
    const response = await getModels();
    return response.data?.data;
  }
);

export const fetchModelTypes = createAsyncThunk(
  "car-slice-modelTypes/fetchModelTypes",
  async (categoryId) => {
    const response = await getModelTypes(categoryId);
    return response.data?.data;
  }
);

export const fetchModelType = createAsyncThunk(
  "car-slice-modelTypes/fetchModelType",
  async (categoryId) => {
    const response = await getModelType(categoryId);
    return response.data?.data[0];
  }
);

const initialState = {
  models: [],
  modelTypes: [],
  modelType: {},
};

const carSliceModel = createSlice({
  name: "car-slice-model",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchModels.fulfilled, function (state, { payload }) {
      state.models = payload;
    });
    builder.addCase(fetchModelTypes.fulfilled, function (state, { payload }) {
      state.modelTypes = payload;
    });
    builder.addCase(fetchModelType.fulfilled, function (state, { payload }) {
      state.modelType = payload;
    });
  },
});

export const {} = carSliceModel;

export default carSliceModel.reducer;
