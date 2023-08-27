import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../redux/contacts/slice';
import { selectToken } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactsFilter from '../components/ContactsFilter/ContactsFilter';

import { fetchContacts} from '../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchContacts({
      token
    })).then(data => {
      setContacts(data.payload)
    });

  }, [dispatch, token]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h2>Your contacts</h2>
      <ContactForm />
      <ContactsFilter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
