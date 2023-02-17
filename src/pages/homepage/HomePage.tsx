import React from 'react'
import {
  kinopoiskApi, TOP_100_POPULAR_FILMS, TOP_250_BEST_FILMS, TOP_AWAIT_FILMS,
} from '../../API/kinopoiskAPI'
import { Loader } from '../../components/loader/Loader'
import { FilmsCarousel } from './filmsCarousel/FilmsCarousel'

export function Homepage() {
  const {
    data: bestFilms, isFetching: bestFilmsFetching, isSuccess: bestFilmsSuccess
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_250_BEST_FILMS })

  const {
    data: popularFilms, isFetching: popularFilmsFetching, isSuccess: popularFilmsSuccess
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_100_POPULAR_FILMS })

  const {
    data: awaitFilms, isFetching: awaitFilmsFetching, isSuccess: awaitFilmsSuccess
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_AWAIT_FILMS })

  return (
    <div className="w-full container flex flex-col justify-center gap-5 py-3">
      <h1 className="text-3xl text-center">Лучшие фильмы</h1>
      {(bestFilmsFetching || !bestFilmsSuccess) ? <Loader /> : <FilmsCarousel films={bestFilms.films!} />}

      <h1 className="text-3xl text-center">Популярные фильмы</h1>
      {(popularFilmsFetching || !popularFilmsSuccess) ? <Loader /> : <FilmsCarousel films={popularFilms.films!} />}
      <h1 className="text-3xl text-center">Ожидаемые Фильмы</h1>
      {(awaitFilmsFetching || !awaitFilmsSuccess) ? <Loader /> : <FilmsCarousel films={awaitFilms.films!} />}
    </div>
  )
}
