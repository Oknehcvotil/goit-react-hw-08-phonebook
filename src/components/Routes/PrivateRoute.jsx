import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getToken);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
