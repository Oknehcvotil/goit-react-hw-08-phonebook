export const getToken = state => state.auth.token;

export const getProfile = state => state.auth.profile;

export const getErrorAuth = state => state.auth.error;

export const getIsLoadingAuth = state => state.auth.isLoading;

export const getIsRefreshing = state => state.auth.isRefreshing;
