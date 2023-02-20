import {createSlice} from '@reduxjs/toolkit'
import {Actors, Films} from "../../types/types";

interface initialStateProps {
  films: Films[],
  search: string,
  actors: Actors[],
  favourite: number[]
}

const initialState: initialStateProps = {
  films: [],
  search: '',
  actors: [],
  favourite: []
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
    getActors(state, action) {
      state.films = action.payload
    },
    setFavouriteFilms(state) {
      const ls = localStorage.getItem('favFilms') || '[]'

      state.favourite = JSON.parse(ls)
    }
  },
})
export default filmsSlice.reducer
export const {getFilms, setSearch, getActors, setFavouriteFilms} = filmsSlice.actions
