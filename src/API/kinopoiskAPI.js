import { createApi } from '@reduxjs/toolkit/query/react'
import { Kinopoisk } from './kinopoisk'

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
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
  }),
})
