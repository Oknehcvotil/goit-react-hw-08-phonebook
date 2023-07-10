import { Link } from './NavLink.styled';

const NavLink = ({ path, children }) => {
  return <Link to={path}>{children}</Link>;
};

export default NavLink;
