import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS'
export const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS'
export const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS'
export const AWAIT_FILMS_BY_NAME = 'AWAIT_FILMS_BY_NAME'
const token = 'a2810fed-e498-4fe2-a69a-b14b641fa617'

export type FilmCatalog = {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string;
  nameOriginal: string;
  countries: string[];
  genres: string[];
  ratingKinopoisk: number;
  ratingImdb?: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export type FilmTop = {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength: string;
  countries: string[];
  genres: string[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: any;
}

export type Films = {
  total?: number;
  totalPages?: number;
  pagesCount?: number;
  items?: FilmCatalog[];
  films?: FilmTop[];
}

export type FilterParams = {
  page:number, 
  order?:string, 
  keyword?: string, 
  country?:string, 
  ratingFrom?: number, 
  yearFrom?:string, 
  yearTo?: string
}

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
      query: ({ page, type }:{page:number, type:string}) => `/v2.2/films/top?type=${type}&page=${page}`,
    })),
    getFilmsWithFilters: (builder.query<Films, FilterParams>({
      query: ({
        page, order='', keyword, country='', ratingFrom=1, yearFrom='', yearTo='',
      }:FilterParams) => `/v2.2/films?page=${page}&order=${order}&keyword=${keyword}&countries=${country}&ratingFrom=${ratingFrom}&yearFrom=${yearFrom}&yearTo=${yearTo}`,
    })),
    getActorsByName: (builder.query({
      query: ({ page, name }:{page:number, name: string}) => `v1/persons?page=${page}&name=${name}`,
    })),
    getFilmById: (builder.query({
      query: (id:number) => `/v2.2/films/${id}`,
    })),
    getFilmVideos: (builder.query({
      query: (id:number) => `/v2.2/films/${id}/videos`,
    })),
  }),
})
export const { useGetFilmByIdQuery, useGetFilmVideosQuery } = kinopoiskApi
