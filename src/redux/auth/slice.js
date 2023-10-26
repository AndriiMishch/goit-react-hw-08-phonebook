import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLogged: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [register.rejected](state, action) {},

    [logIn.pending](state, action) {},
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },

    [logOut.pending](state, action) {},
    [logOut.fulfilled](state, action) {
      state.user = { ...initialState.user };
      state.isLogged = initialState.isLogged;
      state.token = initialState.token;
    },
    [logOut.rejected](state, action) {},

    [refresh.pending](state, action) {},
    [refresh.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLogged = true;
    },
    [refresh.rejected](state, action) {
      state.isLogged = false;
    },
  },
});

export const authReducer = authSlice.reducer;