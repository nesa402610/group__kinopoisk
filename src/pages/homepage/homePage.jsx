import { useQuery } from '@tanstack/react-query'
import {
  Kinopoisk, TOP_100_POPULAR_FILMS, TOP_250_BEST_FILMS, TOP_AWAIT_FILMS,
} from '../../API/kinopoisk'
import { FilmsCarousel } from './filmsCarousel/FilmsCarousel'

export function Homepage() {
  const bestFilmsQuery = useQuery({
    queryKey: ['1'],
    queryFn: () => Kinopoisk.fetchGetFilmsTop(1, TOP_250_BEST_FILMS),
  })

  const popularFilmsQuery = useQuery({
    queryKey: ['2'],
    queryFn: () => Kinopoisk.fetchGetFilmsTop(1, TOP_100_POPULAR_FILMS),
  })

  const awaitFilmsQuery = useQuery({
    queryKey: ['3'],
    queryFn: () => Kinopoisk.fetchGetFilmsTop(1, TOP_AWAIT_FILMS),
  })

  if (bestFilmsQuery.isFetching) {
    return <div>LOADING</div>
  }

  return (

    <div className="w-full container flex flex-col justify-center gap-5 py-3">
      <h1 className="text-3xl text-center">Лучшие фильмы</h1>
      {bestFilmsQuery.isFetching ? 'LOADING' : <FilmsCarousel films={bestFilmsQuery.data.films} />}

      <h1 className="text-3xl text-center">Популярные фильмы</h1>
      {popularFilmsQuery.isFetching ? 'LOADING' : <FilmsCarousel films={popularFilmsQuery.data.films} />}
      <h1 className="text-3xl text-center">Ожидаемые Фильмы</h1>
      {awaitFilmsQuery.isFetching ? 'LOADING' : <FilmsCarousel films={awaitFilmsQuery.data.films} />}
    </div>
  )
}
