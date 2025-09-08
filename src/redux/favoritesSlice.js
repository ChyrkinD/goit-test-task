import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

export const selectFavorites = state => state.favorites.items;
export const selectIsFavorite = createSelector(
  [selectFavorites, (_, camperId) => camperId],
  (favorites, camperId) => favorites.includes(camperId)
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const camperId = action.payload;
      const index = state.items.findIndex(item => item.id === camperId);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(camperId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
