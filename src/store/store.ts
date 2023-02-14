import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import filmsSlice from './slices/filmsSlice'
import { kinopoiskApi } from '../API/kinopoiskAPI'

export const store = configureStore({
  reducer: {
    kinopoiskApi: kinopoiskApi.reducer,
    user: userSlice,
    films: filmsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})
