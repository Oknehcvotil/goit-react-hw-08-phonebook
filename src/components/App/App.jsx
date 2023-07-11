import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistratePage from 'pages/RegistratePage';
import ContactsPage from 'pages/ContactsPage';
import Layout from 'components/Layout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileThunk } from 'redux/auth/thunk';
import { getIsRefreshing } from 'redux/auth/selector';
import Loader from 'components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegistratePage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
