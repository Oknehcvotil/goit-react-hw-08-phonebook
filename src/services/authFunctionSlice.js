import { getProfileThunk, loginThunk, logOutThunk } from 'redux/auth/thunk';

const arrThunks = [getProfileThunk, loginThunk, logOutThunk];

export const fn = type => arrThunks.map(el => el[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

export const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

export const handleFulfilledLogOut = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = null;
  state.token = '';
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};