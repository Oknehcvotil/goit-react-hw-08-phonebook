import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { toast } from 'react-toastify';
import { addContactThunk } from 'redux/contacts/thunk';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const duplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

    if (duplicate) {
      return toast.error(`${name} is already in contacts`);
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContactThunk(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        required
        id="name"
        label="Name"
        name="name"
        size="small"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
      />

      <TextField
        margin="normal"
        required
        type="tel"
        id="number"
        label="Phone Number"
        name="number"
        size="small"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        size="medium"
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
