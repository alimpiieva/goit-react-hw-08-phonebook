import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setContactsAuthHeader = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = async (filter) => {
  const response = await contactsApi.get('/contacts', { params: { filter } });
  return response.data;
};

export const addContact = async (contact) => {
  const response = await contactsApi.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async (contactId) => {
  await contactsApi.delete(`/contacts/${contactId}`);
};
