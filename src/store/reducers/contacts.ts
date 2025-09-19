import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Iuri',
      telephone: '12 1234-1234',
      email: 'iuri@example.com'
    },
    {
      id: 2,
      name: 'Isabela',
      telephone: '12 1234-1234',
      email: 'isabela@example.com'
    },
    {
      id: 3,
      name: 'Thalles',
      telephone: '12 1234-124',
      email: 'thalles@example.com'
    },
    {
      id: 4,
      name: 'John',
      telephone: '555 0134',
      email: 'notjohn@example.com'
    },
    {
      id: 5,
      name: 'Sarah',
      telephone: '555 0134'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const lastContact = state.items[state.items.length - 1]

      const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1
      }

      state.items.push(newContact)
    }
  }
})

export const { edit, remove, add } = contactsSlice.actions

export default contactsSlice.reducer
