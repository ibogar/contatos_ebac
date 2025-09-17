import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  searchQuery?: string
  searchType: string
}

const initialState: FilterState = {
  searchQuery: '',
  searchType: 'name'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload
    }
  }
})

export const { setQuery, setType } = FilterSlice.actions

export default FilterSlice.reducer
