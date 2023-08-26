import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setContactsAuthHeader = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (filter, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setContactsAuthHeader(token); // Встановіть авторизаційний заголовок
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
    setContactsAuthHeader(token); // Встановіть авторизаційний заголовок
    const response = await contactsApi.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setContactsAuthHeader(token); // Встановіть авторизаційний заголовок
    await contactsApi.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
