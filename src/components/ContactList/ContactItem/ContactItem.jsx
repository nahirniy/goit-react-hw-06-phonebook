import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from '../../../redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.item}>
      {name}: {number}
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
