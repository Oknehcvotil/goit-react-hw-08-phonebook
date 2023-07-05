import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk, logOutThunk } from './thunk';

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

const handleFulfilledLogOut = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = null;
  state.token = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
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
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getProfileThunk.pending,
          logOutThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          getProfileThunk.rejected,
          logOutThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
