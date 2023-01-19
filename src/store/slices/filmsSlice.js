import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  films: [],
}
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilms(state, action) {
      state.films = action.payload
    }
  }
})
export default filmsSlice.reducer
export const {getFilms} = filmsSlice.actions