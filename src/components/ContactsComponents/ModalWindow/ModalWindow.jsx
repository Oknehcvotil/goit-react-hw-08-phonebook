import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import Loader from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selector';
import { toast } from 'react-toastify';
import { updateContactThunk } from 'redux/contacts/thunk';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ isOpen, id, name, number, onClose }) => {
  const [newName, setNewName] = React.useState(name);
  const [newNumber, setNewNumber] = React.useState(number);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  // const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setNewName(value);
        break;

      case 'number':
        setNewNumber(value);
        break;

      default:
        break;
    }
  };

  const handleEdit = async e => {
    e.preventDefault();

    // const duplicate = contacts.some(
    //   contact =>
    //     contact.name.toLowerCase() === newName.toLowerCase() &&
    //     contact.number === newNumber
    // );

    // if (duplicate) {
    //   toast.error(`${number} is already in contacts`);
    //   return;
    // }

    if (newName === '' || newNumber === '') {
      toast.error('Fields are empty!');
      return;
    }

    const changedContact = {
      id: id,
      name: newName,
      number: newNumber,
    };

    console.log(changedContact);

    dispatch(updateContactThunk(changedContact))
      .unwrap()
      .then(() => {
        onClose();
        toast.success(`${name} contact was changed`);
      })
      .catch(e => {
        console.log(e);
        toast.error(`Ooops ${error}`);
      });
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: { xs: 240, sm: 400 } }}>
          <Box
            component="form"
            autoComplete="off"
            noValidate
            onSubmit={handleEdit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleChange}
              value={newName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="tel"
              id="number"
              label="Phone Number"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              onChange={handleChange}
              value={newNumber}
            />
            <Grid container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 2, mr: 2 }}
              >
                Save
              </Button>
              <Button
                type="button"
                size="medium"
                variant="outlined"
                sx={{ mt: 2, mb: 2 }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>
      {isLoading && <Loader />}
    </div>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ModalWindow;
