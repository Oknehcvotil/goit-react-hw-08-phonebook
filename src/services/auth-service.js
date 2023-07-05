import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorizations'] = token;
  console.log(instance.defaults.headers.common['Authorizations']);
};

export const delToken = token => {
  delete instance.defaults.headers.common['Authorizations'];
};

export const signUp = async body => {
  const response = await instance.post(`/users/signup`, body);
  return response;
};

export const logIn = async body => {
  const { data } = await instance.post(`/users/login`, body);

  setToken(`Bearer ${data.token}`);

  return data;
};

export const getProffile = async () => {
  const response = await instance.get('/users/current');
  console.log(response);
  return response;
};

export const logOut = async () => {
  const response = await instance.post('/users/logout');
  console.log(response);
  return response;
};
