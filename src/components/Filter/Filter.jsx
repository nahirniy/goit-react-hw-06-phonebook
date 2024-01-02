import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const defaultValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const findContact = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <>
      <h2>Contacts</h2>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          id="filter"
          name="filter"
          className={css.input}
          onInput={findContact}
          value={defaultValue}
        />
      </label>
    </>
  );
};
