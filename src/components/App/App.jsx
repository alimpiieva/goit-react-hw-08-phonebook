import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import { Container } from './App.styled';
import { fetchContacts } from '../../redux/slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <h2>Contacts:</h2>
      <ContactsFilter />
      <ContactList />
    </Container>
  );
};

export default App;
