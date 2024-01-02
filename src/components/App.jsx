import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const LOCALSTORAGE_KEY = 'conctacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const newName = newContact.name.toLowerCase();
    const isCheckedContact = contacts.find(
      ({ name }) => name.toLowerCase() === newName
    );

    if (!isCheckedContact) {
      newContact.id = nanoid();

      setContacts([...contacts, newContact]);
    } else {
      Notify.failure(`${newContact.name} is already in contacts`);
    }
  };

  const findContact = ({ target: { value } }) => setFilter(value.toLowerCase());

  const filteredConctact = () => {
    const suitableContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    return filter === '' ? contacts : suitableContacts;
  };

  const deleteContact = idDeleteContact => {
    setContacts(contacts.filter(({ id }) => id !== idDeleteContact));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter findContact={findContact} />
      <ContactList
        filteredConctact={filteredConctact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
