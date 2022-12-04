import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetData } from "../../service/FakeStoreApi";

const initialState = {
  data: [],
  status: "idle",
};

export const getDataProducts = createAsyncThunk("data/fetch", async (data) => {
  const response = await GetData(data);
  return response;
});

export const valueSlice = createSlice({
  name: "marketplace",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getDataProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default valueSlice.reducer;
