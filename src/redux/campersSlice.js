import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, handlePending);
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(fetchCampers.rejected, handleRejected);
  },
});

export default campersSlice.reducer;
