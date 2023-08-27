import {contactsApi} from '../api';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const setContactsAuthHeader = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (filter, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setContactsAuthHeader(token); 
    const response = await contactsApi.get('/contacts', {
      params: { filter },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setContactsAuthHeader(token); 
    const response = await contactsApi.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setContactsAuthHeader(token); 
    await contactsApi.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
