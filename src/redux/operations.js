import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652ed8c40b8d8ddac0b1fa2f.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`contacts/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacrts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);