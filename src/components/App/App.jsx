import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Section, Title, TitleMain } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunk';
import Loader from 'components/Loader';

const App = () => {
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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
