import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ loadMoreType }, { getState, rejectWithValue }) => {
    const { filters, campers } = getState();

    const params = {
      limit: 4,
      page: loadMoreType ? campers.items.length / 4 + 1 : 1,
    };

    if (filters.location) {
      params.location = filters.location;
    }

    if (filters.vehicleType) {
      params.form = filters.vehicleType;
    }

    Object.keys(filters.vehicleEquipment).forEach(key => {
      if (key === 'automatic' && filters.vehicleEquipment[key]) {
        params.transmission = 'automatic';
      } else {
        if (filters.vehicleEquipment[key]) {
          params[key] = true;
        }
      }
    });

    try {
      const response = await axios.get('/campers', { params });
      return { ...response.data, loadMoreType };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchCamperDetails',
  async ({ camperId }, thunkAPI) => {
    try {
      return getCamperDetails(camperId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCamperDetails = async id => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
