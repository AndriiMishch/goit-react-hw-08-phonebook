import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  changeContact,
} from './actions';

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending](state, action) {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [getContacts.rejected](state, action) {
      state.isLoading = false;
    },

    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
    },

    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
    },

    [changeContact.pending](state, action) {
      state.isLoading = true;
    },
    [changeContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts[index].name = action.payload.name;
      state.contacts[index].number = action.payload.number;
    },
    [changeContact.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;