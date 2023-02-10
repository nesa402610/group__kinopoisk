import { createApi } from '@reduxjs/toolkit/query/react'
import { Kinopoisk } from './kinopoisk'

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  endpoints: (builder) => ({
    getTop250: (builder.query({
      queryFn: async ({ page, type }) => {
        try {
          return Kinopoisk.fetchGetFilmsTop(page, type)
        } catch (error) {
          return { error: error.message }
        }
      },

    })),
    getFilms: (builder.query({
      queryFn: async ({
        page, order, keyword, country, ratingFrom, yearFrom, yearTo,
      }) => {
        try {
          return Kinopoisk.fetchGetFilms(page, order, keyword, country, ratingFrom, yearFrom, yearTo)
        } catch (error) {
          return { error: error.message }
        }
      },

    })),
  }),
})

export const { useGetTop250Query, useGetFilmsQuery } = kinopoiskApi
