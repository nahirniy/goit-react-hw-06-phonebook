import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    dispatch(addContact({ name: name.value, number: number.value }));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input className={css.input} type="text" name="name" id="name" required />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" id="number" required />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
