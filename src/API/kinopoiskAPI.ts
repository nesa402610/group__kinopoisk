import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS'
export const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS'
export const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS'
export const AWAIT_FILMS_BY_NAME = 'AWAIT_FILMS_BY_NAME'
const token = 'a2810fed-e498-4fe2-a69a-b14b641fa617'

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', token)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTop250: (builder.query({
      query: ({ page, type }) => `/v2.2/films/top?type=${type}&page=${page}`,
    })),
    getFilmsWithFilters: (builder.query({
      query: ({
        page, order, keyword, country, ratingFrom, yearFrom, yearTo,
      }) => `/v2.2/films?page=${page}&order=${order}&keyword=${keyword}&countries=${country}&ratingFrom=${ratingFrom}&yearFrom=${yearFrom}&yearTo=${yearTo}`,
    })),
    getFilmByName: (builder.query({
      query: ({ page, keyword }) => `/v2.2/films?page=${page}&keyword=${keyword}`,
    })),
    getActorsByName: (builder.query({
      query: ({ page, name }) => `v1/persons?page=${page}&name=${name}`,
    })),
    getFilmById: (builder.query({
      query: (id) => `/v2.2/films/${id}`,
    })),
    getFilmVideos: (builder.query({
      query: (id) => `/v2.2/films/${id}/videos`,
    })),
  }),
})
export const { useGetFilmByIdQuery, useGetFilmVideosQuery } = kinopoiskApi
