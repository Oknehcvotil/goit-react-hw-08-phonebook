import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk('contacts/create', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
