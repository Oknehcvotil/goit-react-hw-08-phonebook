import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunk';
import Loader from 'components/Loader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <CssBaseline />
        <Grid item xs={12} md={6}>
          <Typography
            fontSize="25px"
            variant="h2"
            color="#000000"
            marginBottom="10px"
            textAlign="center"
          >
            Phonebook
          </Typography>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            fontSize="25px"
            variant="h2"
            color="#000000"
            marginBottom="10px"
            textAlign="center"
          >
            Contacts
          </Typography>
          {contacts.length > 0 && <Filter />}

          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Typography
              fontSize="25px"
              variant="h3"
              color="#000000"
              marginLeft="auto"
              marginRight="auto"
            >
              No Contacts yet ...
            </Typography>
          )}
        </Grid>
      </Grid>
      {error && toast.error(`Ooops, ${error}`)}
      {isLoading && !error && <Loader />}
    </Box>
  );
};

export default Contacts;
