import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS'
export const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS'
export const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS'
const token = 'a2810fed-e498-4fe2-a69a-b14b641fa617'

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', token)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTop250: (builder.query({
      query: ({ page, type }) => `/top?type=${type}&page=${page}`,
    })),
    getFilmsWithFilters: (builder.query({
      query: ({
        page, order, keyword, country, ratingFrom, yearFrom, yearTo,
      }) => `?page=${page}&order=${order}&keyword=${keyword}&countries=${country}&ratingFrom=${ratingFrom}&yearFrom=${yearFrom}&yearTo=${yearTo}`,
    })),
    getFilmById: (builder.query({
      query: (id) => `${id}`,
    })),
  }),
})
export const { useGetFilmByIdQuery } = kinopoiskApi
