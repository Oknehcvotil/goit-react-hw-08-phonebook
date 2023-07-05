// import ContactForm from '../ContactsComponents/ContactForm';
// import ContactList from '../ContactsComponents/ContactList';
// import Filter from '../ContactsComponents/Filter';
// import { Section, Title, TitleMain } from './App.styled';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getError, getIsLoading } from 'redux/selector';
// import { useEffect } from 'react';
// import { getContactsThunk } from 'redux/thunk';
// import Loader from 'components/Loader';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistratePage from 'pages/RegistratePage';
import ContactsPage from 'pages/ContactsPage';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuth = useSelector(state => state.auth.token);

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistratePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
