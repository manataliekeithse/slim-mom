import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-api.onrender.com/api';
// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
      // console.log('response data', response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state?.auth?.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
