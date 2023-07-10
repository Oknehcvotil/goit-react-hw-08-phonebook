import NavLink from 'components/NavLink';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/selector';

const MainNav = () => {
  const isAuth = useSelector(getToken);

  return (
    <>
      <NavLink path={'/'}>{'Phonebook'}</NavLink>
      {isAuth && <NavLink path={'/contacts'}>{'Contacts'}</NavLink>}
    </>
  );
};

export default MainNav;
