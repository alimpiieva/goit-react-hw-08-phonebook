import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/api';
import { selectContacts } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import { Layout } from '../components/Layout';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h2>Your contacts</h2>
      <ContactForm />
      <ContactsFilter />
      <ContactList contacts={contacts} />
    </Layout>
  );
};

export default ContactsPage;
