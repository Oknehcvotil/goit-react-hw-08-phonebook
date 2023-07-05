import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk, logOutThunk } from './thunk';
import { initialAuth } from './initialState';
import {
  fn,
  handlePending,
  handleFulfilled,
  handleFulfilledProfile,
  handleFulfilledLogOut,
  handleRejected,
} from 'services/authFunctionSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    logOut(state) {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
