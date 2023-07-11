import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from 'redux/auth/selector';
import { logOutThunk } from 'redux/auth/thunk';
import { UserMenuCont, Btn } from './UserMenu.styled';
import { Typography } from '@mui/material';

const UserMenu = () => {
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    navigate('/');
  };

  return (
    <UserMenuCont>
      <Typography
        fontSize="15px"
        variant="p"
        color="#FFFFFF"
        marginLeft="auto"
        marginRight="auto"
      >
        Hello, {profile && profile.name}!
      </Typography>
      <Btn type="button" onClick={handleLogOut}>
        Log Out
      </Btn>
    </UserMenuCont>
  );
};

export default UserMenu;
