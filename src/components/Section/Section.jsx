import css from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <section>
      <div className={css.container}>
        <h1>Phonebook</h1>
        {children}
      </div>
    </section>
  );
};
