import axios from 'axios';

const URL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

export const delToken = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await axios.post(`${URL}/users/signup`, body);

  setToken(`Bearer ${data.token}`);

  return data;
};

export const logIn = async body => {
  const { data } = await axios.post(`${URL}/users/login`, body);

  setToken(`Bearer ${data.token}`);

  return data;
};

export const getProffile = async () => {
  const { data } = await axios.get(`${URL}/users/current`);

  return data;
};

export const logOut = async () => {
  await axios.post(`${URL}/users/logout`);

  delToken();
};
