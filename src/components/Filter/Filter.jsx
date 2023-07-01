import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={changeFilter} value={filter} />
    </Label>
  );
};

export default Filter;
