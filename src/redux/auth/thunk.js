import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProffile, logIn, logOut, signUp, setToken } from 'api/authApi';

export const registerThunk = createAsyncThunk('auth/register', body => {
  const data = signUp(body);

  return data;
});

export const loginThunk = createAsyncThunk('auth/login', body => {
  const data = logIn(body);

  return data;
});

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return;

    setToken(token);

    return getProffile();
  }
);

export const logOutThunk = createAsyncThunk('auth/logOut', () => {
  return logOut();
});
