import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
