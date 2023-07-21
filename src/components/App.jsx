import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filther/Filther';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (newName, newNumber) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingContact) {
      alert('This contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: newName,
      number: newNumber,
    };
    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
