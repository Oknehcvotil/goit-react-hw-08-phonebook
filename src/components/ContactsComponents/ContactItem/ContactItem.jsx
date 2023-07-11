import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/contacts/thunk';
import { useState } from 'react';
import { getIsLoading } from 'redux/contacts/selector';
import ModalWindow from '../ModalWindow';
import Loader from 'components/Loader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);

  const isLoading = useSelector(getIsLoading);

  const handleDeleteContact = () => dispatch(deleteContactThunk(id));

  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <Container
      maxWidth="md"
      sx={{
        p: 1,
        mb: 2,
        bgcolor: '#ffffff',
        borderRadius: '10px',
        boxShadow: 3,
      }}
      component="li"
      id={id}
    >
      <Grid container direction="column">
        <Grid item xs={12} md={4}>
          <Typography
            paragraph
            sx={{
              fontSize: '18px',
            }}
            color="black"
          >
            {name}:
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
            }}
            color="#757575"
            paragraph
          >
            {number}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2}>
            <Button
              type="button"
              variant="outlined"
              aria-label="delete"
              size="small"
              color="primary"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteContact}
            >
              Delete
            </Button>
            <Button
              type="button"
              variant="contained"
              aria-label="edit"
              size="small"
              color="primary"
              startIcon={<EditIcon />}
              onClick={toggleModal}
            >
              Edit
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {isShowModal && (
        <ModalWindow
          onClose={toggleModal}
          id={id}
          name={name}
          number={number}
          isOpen={isShowModal}
        />
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
