import axios from 'axios';

const URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${URL}/contacts`);

  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await axios.post(`${URL}/contacts`, { name, number });

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${URL}/contacts/${id}`);

  return data;
};
