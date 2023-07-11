import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/selector';
import MainNav from 'components/MainNav';
import RegisterNav from 'components/RegisterNav';
import UserMenu from 'components/UserMenu';

const Header = () => {
  const isAuth = useSelector(getToken);

  return (
    <AppBar
      position="static"
      sx={{
        mb: 2,
      }}
    >
      <Toolbar component="nav">
        <MainNav />
        {!isAuth ? <RegisterNav /> : <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
