import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './thunk';

const authState = {
  token: '',
  profile: null,
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
