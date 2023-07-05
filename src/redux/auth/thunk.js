import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProffile, logIn, logOut } from 'api/authApi';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await logIn(body);
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProffile();
});

export const logOutThunk = createAsyncThunk('auth/logOut', async () => {
  return await logOut();
});
