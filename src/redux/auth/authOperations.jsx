import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const result = await axios.post('users/singup', credentials);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      alert('This user alreasy exists');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const result = await axios.post('users/login', credentials);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      alert('Please enter correct login and password!');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    alert('Please enter correct login and password!');
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Please login!');
    }

    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      alert('Ooops! Something went wrong. Please try again!');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
