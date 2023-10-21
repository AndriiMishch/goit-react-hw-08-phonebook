import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter.toLowerCase();

export const selectContactsItems = state => state.contacts.items;

export const selectContactsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContactsItems, selectFilterValue],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter))
);