import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fn,
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'services/functionSlice';
import { initialContacts } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
