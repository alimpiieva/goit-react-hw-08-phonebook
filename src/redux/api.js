import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
