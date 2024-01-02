import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Section>
      <ContactForm />
      <Filter />
      <ContactList />
    </Section>
  );
};
