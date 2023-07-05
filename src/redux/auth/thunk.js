import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProffile, logIn } from 'services/auth-service';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await logIn(body);
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProffile();
});
