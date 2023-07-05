import { combineReducers } from '@reduxjs/toolkit';

import { filtersReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authslice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  auth: authReducer,
});
