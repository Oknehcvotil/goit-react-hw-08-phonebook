import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/thunk';
import { getProfileThunk } from 'redux/auth/thunk';

const Header = () => {
  const { profile, token } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  React.useEffect(() => {
    token && dispatch(getProfileThunk());
    
    navigate('/');
    // eslint-disable-next-line
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
        {!profile && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {profile && (
          <>
            <Link to="/contacts">Contacts</Link>
            <div>
              <p>{profile.name}</p>
              <button type="button" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
