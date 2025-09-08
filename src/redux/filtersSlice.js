import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleType: '',
  vehicleEquipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

export const selectLocation = state => state.filters.location;
export const selectVehicleType = state => state.filters.vehicleType;
export const selectVehicleEquipment = state => state.filters.vehicleEquipment;

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType =
        state.vehicleType === action.payload ? '' : action.payload;
    },
    toggleVehicleEquipment: (state, action) => {
      state.vehicleEquipment[action.payload] =
        !state.vehicleEquipment[action.payload];
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocation,
  setVehicleType,
  toggleVehicleEquipment,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
