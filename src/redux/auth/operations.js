import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('user/logIn', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(false);
    }

    token.set(persistedToken);
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});