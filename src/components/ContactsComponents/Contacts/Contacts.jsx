import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Section, Title, TitleMain } from './Contacts.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunk';
import Loader from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <TitleMain>Phonebook</TitleMain>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        {contacts.length > 0 && <Filter />}

        {contacts.length > 0 && <ContactList />}
      </Section>
      {error && toast.error(`Ooops, ${error}`)}
      {isLoading && !error && <Loader />}
    </>
  );
};

export default Contacts;
