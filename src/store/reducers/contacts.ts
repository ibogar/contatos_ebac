import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      name: 'Iuri',
      telephone: '12 1234-1234',
      email: 'iuri@example.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (t) => t.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    }
  }
})

export const { edit } = contactsSlice.actions

export default contactsSlice.reducer
