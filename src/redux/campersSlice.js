import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperDetails, fetchCampers } from './campersOps';

export const selectCampers = state => state.campers.items;
export const selectSelectedItem = state => state.campers.selectedItem;
export const selectTotal = state => state.campers.total;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    selectedItem: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total, loadMoreType } = action.payload;
        state.isLoading = false;
        state.error = null;
        state.items = loadMoreType ? [...state.items, ...items] : items || [];
        state.total = total || 0;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedItem = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, handleRejected);
  },
});

export default campersSlice.reducer;
