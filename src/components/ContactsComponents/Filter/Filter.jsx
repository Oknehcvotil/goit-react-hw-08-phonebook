import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selector';
import { setFilter } from 'redux/contacts/filterSlice';
import { Container, TextField, Typography } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Container>
      <Typography sx={{ mb: 0.5 }} fontSize="22px" color="#00000" paragraph>
        Find contacts by name:
      </Typography>
      <TextField
        sx={{ mb: 3 }}
        fullWidth
        name="filter"
        size="small"
        onChange={changeFilter}
        value={filter}
      />
    </Container>
  );
};

export default Filter;
