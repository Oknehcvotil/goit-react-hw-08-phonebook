import {
  getProfileThunk,
  loginThunk,
  logOutThunk,
  registerThunk,
} from 'redux/auth/thunk';

const arrThunks = [getProfileThunk, loginThunk, logOutThunk, registerThunk];

export const fn = type => arrThunks.map(el => el[type]);

export const handleFulfilledProfilePending = state => {
  state.isRefreshing = true;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.profile = payload.user;
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

export const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
  state.isRefreshing = false;
};

export const handleFulfilledLogOut = state => {
  state.isLoading = false;
  state.error = '';
  state.profile = null;
  state.token = '';
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
  state.isRefreshing = false;
};
