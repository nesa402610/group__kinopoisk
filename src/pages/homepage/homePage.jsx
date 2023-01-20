/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, useQuery } from '@tanstack/react-query'
import { Kinopoisk } from '../../API/kinopoisk'
import { HomepageCard } from './homepageCard/HomepageCard'

export function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['films'],
    queryFn: Kinopoisk.fetchGetGilms,
  })
  if (isLoading) return 'Loading...'
  return (
    <div className="w-full container flex justify-center align-middle">

      <div className="flex justify-center mb-4 flex-wrap">
        {data.films.map((film) => <HomepageCard name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} genres={film.genres} />)}
      </div>

    </div>
  )
}
