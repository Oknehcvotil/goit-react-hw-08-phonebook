import { useDispatch } from 'react-redux';
import { Item, Text, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/thunk';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContactThunk(id));

  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="button" onClick={handleDeleteContact}>
        Delete
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
