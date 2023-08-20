import React, { useState } from 'react';
import { LabelForm, Label, InputField, SubmitButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);


  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || phone.trim() === '') {
      alert('Please provide both name and phone.');
      return;
    }

    if (contacts.some(contact => contact.name === name || contact.phone === phone)) {
      alert('Contact with the same name or phone already exists.');
      return;
    }
    setIsAdding(true);
    dispatch(addContact({ name: name, phone: phone }))
      .then(() => {
        setName('');
        setPhone('');
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
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <LabelForm onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name">Name</Label>
        <InputField
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone number</Label>
        <InputField
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <SubmitButton type="submit" disabled={isAdding || isLoading}>
        {isAdding ? 'Adding...' : 'Add contact'}
      </SubmitButton>
    </LabelForm>
  );
};

export default ContactForm;
