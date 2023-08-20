import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './thunk';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;