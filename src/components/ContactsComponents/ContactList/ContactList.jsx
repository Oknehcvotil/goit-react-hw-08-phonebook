import ContactItem from 'components/ContactsComponents/ContactItem';
import { getContacts, getFilter } from 'redux/contacts/selector';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <Container maxWidth="md" component="ul">
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Container>
  );
};

export default ContactList;
