import { useQuery } from '@tanstack/react-query'
import {
  Kinopoisk, TOP_100_POPULAR_FILMS, TOP_250_BEST_FILMS, TOP_AWAIT_FILMS,
} from '../../API/kinopoisk'
import { kinopoiskApi } from '../../API/kinopoiskAPI'
import { Loader } from '../../components/loader/Loader'
import { FilmsCarousel } from './filmsCarousel/FilmsCarousel'

export function Homepage() {
  const {
    data: bestFilms, isFetching: bestFilmsFetching,
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_250_BEST_FILMS })

  const {
    data: popularFilms, isFetching: popularFilmsFetching,
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_100_POPULAR_FILMS })

  const {
    data: awaitFilms, isFetching: awaitFilmsFetching,
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_AWAIT_FILMS })

  return (
    <div className="w-full container flex flex-col justify-center gap-5 py-3">
      <h1 className="text-3xl text-center">Лучшие фильмы</h1>
      {bestFilmsFetching ? <Loader /> : <FilmsCarousel films={bestFilms.films} />}

      <h1 className="text-3xl text-center">Популярные фильмы</h1>
      {popularFilmsFetching ? <Loader /> : <FilmsCarousel films={popularFilms.films} />}
      <h1 className="text-3xl text-center">Ожидаемые Фильмы</h1>
      {awaitFilmsFetching ? <Loader /> : <FilmsCarousel films={awaitFilms.films} />}
    </div>
  )
}
