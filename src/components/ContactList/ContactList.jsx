import { ContactItem } from './ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ filteredConctact, deleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {filteredConctact.map(({ id, name, number }) => {
        return (
          <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
        );
      })}
    </ul>
  );
};
