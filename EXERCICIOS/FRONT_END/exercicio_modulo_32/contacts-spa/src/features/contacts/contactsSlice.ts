import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Contact } from './types';

interface ContactsState {
  contacts: Contact[];
  editingContact: Contact | null;
}

const initialState: ContactsState = {
  contacts: [],
  editingContact: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
    },
    startEditContact: (state, action: PayloadAction<Contact>) => {
      state.editingContact = action.payload;
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
      state.editingContact = null;
    },
  },
});

export const { addContact, removeContact, editContact, startEditContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
