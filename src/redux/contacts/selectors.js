import { selectFiltersSearch } from 'redux/filtres/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersSearch],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectIsLoading = state => state.contacts.isLoading;

export const selectContactsCount = state => state.contacts.contacts.length;