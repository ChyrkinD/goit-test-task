import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campersSlice';
import filtersReducer from './filtersSlice';
import favoritesReducer from './favoritesSlice';

const favPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const persistedFavReducer = persistReducer(favPersistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: persistedFavReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
