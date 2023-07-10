import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
  updateContactThunk,
} from '../redux/contacts/thunk';

const arrThunks = [
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
  updateContactThunk,
];

export const fn = type => arrThunks.map(el => el[type]);

export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

export const handleFulfilledAdd = (state, { payload }) => {
  console.log(payload);
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

export const handleFulfilledUpdate = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = '';

  const contactIndex = state.contacts.items.findIndex(
    contact => contact.id === payload.id
  );

  state.contacts.items.splice(contactIndex, 1, payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

export const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
};
