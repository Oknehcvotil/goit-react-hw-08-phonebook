import { useDispatch, useSelector } from 'react-redux';
import { Item, Text, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/contacts/thunk';
import { useState } from 'react';
import { getIsLoading } from 'redux/contacts/selector';
import ModalWindow from '../ModalWindow';
import Loader from 'components/Loader';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);

  const isLoading = useSelector(getIsLoading);

  const handleDeleteContact = () => dispatch(deleteContactThunk(id));

  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="button" onClick={handleDeleteContact}>
        Delete
      </Btn>
      <Btn type="button" onClick={toggleModal}>
        Edit
      </Btn>
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
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
