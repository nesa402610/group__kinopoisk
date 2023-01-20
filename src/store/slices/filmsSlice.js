import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  films: [],
  search: '',
}
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilms(state, action) {
      state.films = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    },
  },
})
export default filmsSlice.reducer
export const { getFilms, setSearch } = filmsSlice.actions
