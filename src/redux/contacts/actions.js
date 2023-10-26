import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactID, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${contactID}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/change',
  async (contactData, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `contacts/${contactData.id}`,
        contactData.user
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);