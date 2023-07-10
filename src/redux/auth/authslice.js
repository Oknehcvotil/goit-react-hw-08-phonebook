import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getProfileThunk,
  loginThunk,
  logOutThunk,
  registerThunk,
} from './thunk';
import { initialAuth } from './initialState';
import {
  fn,
  handlePending,
  handleFulfilledProfilePending,
  handleFulfilled,
  handleFulfilledProfile,
  handleFulfilledLogOut,
  handleRejected,
} from 'services/authFunctionSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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
      .addCase(getProfileThunk.pending, handleFulfilledProfilePending)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, logOutThunk.pending, registerThunk.pending),
        handlePending
      )
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { logOut } = authSlice.actions;
