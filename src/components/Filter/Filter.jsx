import css from './Filter.module.css';

export const Filter = ({ findContact }) => {
  return (
    <label className={css.label} htmlFor="filter">
      Find contacts by name
      <input type="text" id="filter" name="filter" className={css.input} onInput={findContact} />
    </label>
  );
};
