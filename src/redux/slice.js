import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceForContacts } from './api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await instanceForContacts.get('/');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const response = await instanceForContacts.post('/', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async contactId => {
  await instanceForContacts.delete(`/${contactId}`);
  return contactId;
});
