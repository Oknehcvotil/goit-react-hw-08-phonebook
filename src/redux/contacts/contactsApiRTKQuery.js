import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64945ca20da866a95367a336.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => `contacts/${id}`,
      invalidatesTags: ['Contacts'],
    }),
    // addContact: builder.mutation({
    //   query: ({ name, number: phone }) => (`contacts/`, { name, phone }),
    // }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
