import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'redux/auth/selector';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getToken);
  const { state } = useLocation();
  return !isAuth ? children : <Navigate to={state ? state : '/'} />;
};

export default PublicRoute;
