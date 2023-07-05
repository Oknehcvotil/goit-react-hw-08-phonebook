import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'redux/auth/selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getToken);
  const location = useLocation;
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
