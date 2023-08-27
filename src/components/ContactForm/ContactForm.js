import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please provide both name and phone.');
      return;
    }

    if (contacts.some(contact => contact.name === name || contact.number === number)) {
      alert('Contact with the same name or phone already exists.');
      return;
    }
    
    setIsAdding(true);
    dispatch(addContact({ name: name, number: number }))
      .then(() => {
        setName('');
        setNumber('');
        setIsAdding(false); 
      })
      .catch(error => {
        alert('An error occurred while adding the contact.');
        setIsAdding(false);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="number">Phone number</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isAdding || isLoading}>
        {isAdding ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};

export default ContactForm;
