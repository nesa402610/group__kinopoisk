import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Kinopoisk } from './kinopoisk'

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' }),
  endpoints: (builder) => ({
    getTop250: (builder.query({
      queryFn: async ({ page, type }) => {
        try {
          console.log()
          return Kinopoisk.fetchGetFilmsTop(page, type)
        } catch (error) {
          return { error: error.message }
        }
      },
    })),
    getFilm: builder.query({
      query: (id) => ({
        url: `${id}`,
        headers: {
          'X-API-KEY': 'a2810fed-e498-4fe2-a69a-b14b641fa617',
        },
      }),
    }),
  }),
})

export const { useGetTop250Query, useGetFilmQuery } = kinopoiskApi
