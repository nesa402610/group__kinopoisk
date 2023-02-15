import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import filmsSlice from './slices/filmsSlice'
import { kinopoiskApi } from '../API/kinopoiskAPI'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    kinopoiskApi: kinopoiskApi.reducer,
    user: userSlice,
    films: filmsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch