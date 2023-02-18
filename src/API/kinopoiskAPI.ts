import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ActorByID, Actors, FilmDetailed, Films, FilterParams, IActorByFilmId, IPhotos, SimilarFilms, Videos} from "../types/types";

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
    getTop250: (builder.query<Films, {page:number, type:string}>({
      query: ({ page, type }) => `/v2.2/films/top?type=${type}&page=${page}`,
    })),
    getFilmsWithFilters: (builder.query<Films, FilterParams>({
      query: ({
        page, order='', keyword, country='', ratingFrom=1, yearFrom='', yearTo='',
      }) => `/v2.2/films?page=${page}&order=${order}&keyword=${keyword}&countries=${country}&ratingFrom=${ratingFrom}&yearFrom=${yearFrom}&yearTo=${yearTo}`,
    })),
    getActorsByName: (builder.query<Actors, {page: number, name: string}>({
      query: ({ page, name }) => `v1/persons?page=${page}&name=${name}`,
    })),
    getFilmById: (builder.query<FilmDetailed, string>({
      query: (id) => `/v2.2/films/${id}`,
    })),
    getFilmVideos: (builder.query<Videos, string>({
      query: (id) => `/v2.2/films/${id}/videos`,
    })),
    getActorsByFilmId: (builder.query<IActorByFilmId[], string>({
      query: (id) => `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
    })),
    getActorById: (builder.query<ActorByID, string>({
      query: (id) => `/v1/staff/${id}`,
    })),
    getPhotosByFilmId: (builder.query<IPhotos, string>({
      query: (id) => `/v2.2/films/${id}/images`
    })),
    getSimilarByFilmId: (builder.query<SimilarFilms, string>({
      query: (id)=>`/v2.2/films/${id}/similars`
    }))
  }),
})
export const { useGetSimilarByFilmIdQuery, useGetActorByIdQuery, useGetFilmByIdQuery, useGetFilmVideosQuery, useGetActorsByFilmIdQuery, useGetPhotosByFilmIdQuery } = kinopoiskApi