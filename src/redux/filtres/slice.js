import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;