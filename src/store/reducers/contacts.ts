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
      email: 'john@example.com'
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
    }
  }
})

export const { edit, remove } = contactsSlice.actions

export default contactsSlice.reducer
