import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import filmsSlice from './slices/filmsSlice'

const rootReducer = combineReducers({
  user: userSlice,
  films: filmsSlice,
})
export const store = configureStore({
  reducer: rootReducer,
})
