import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [dataContact, setDataContact] = useState({ name: '', number: '' });

  const handleChange = ({ target: { name, value } }) => {
    setDataContact({ ...dataContact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ ...dataContact });

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          id="number"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
