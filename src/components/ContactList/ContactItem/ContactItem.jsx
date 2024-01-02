import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button type="button" className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
