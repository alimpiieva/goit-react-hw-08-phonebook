import axios from "axios";

export const instanceForContacts = axios.create({
    baseURL: 'https://64d7c6055f9bf5b879cdf574.mockapi.io/api/v1/contacts',
});
