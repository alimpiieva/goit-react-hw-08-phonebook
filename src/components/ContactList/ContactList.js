import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/api';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [deletingContactId, setDeletingContactId] = useState(null);

  const handleDeleteContact = contactId => {
    setDeletingContactId(contactId);
    dispatch(deleteContact(contactId))
      .then(() => {
        dispatch(fetchContacts());
        setDeletingContactId(null);
      })
      .catch(error => {
        console.log('An error occurred while deleting the contact.', error);
        setDeletingContactId(null);
      });
  };

  return (
    <div>
      {visibleContacts.map(contact => (
        <div key={contact.id}>
          <span>
            {contact.name}: {contact.number} 
          </span>
          <button
            onClick={() => handleDeleteContact(contact.id)}
            disabled={deletingContactId === contact.id}
          >
            {deletingContactId === contact.id ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
