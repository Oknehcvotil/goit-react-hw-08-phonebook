import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { delToken, logOut } from 'services/auth-service';
import { getProfileThunk } from 'redux/auth/thunk';

const Header = () => {
  const { profile, token } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut);
    delToken();
  };

  React.useEffect(() => {
    token && dispatch(getProfileThunk());
  }, [token, dispatch]);

  return (
    <AppBar
      position="static"
      sx={{
        mb: 2,
      }}
    >
      <Toolbar>
        <Link to="/">Phonebook</Link>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {profile && (
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
