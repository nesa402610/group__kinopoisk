import React from 'react'
import { FilmCard } from '../filmCard/FilmCard'

export function FilmListContainer({ films }: any) {
  return (
    <div className="flex justify-center mb-4 flex-wrap">
      {films.map((film: any) => (
        <FilmCard
          key={film.kinopoiskId}
          name={film.nameRu}
          year={film.year}
          rating={film.ratingKinopoisk}
          img={film.posterUrlPreview}
          id={film.kinopoiskId}
          genres={film.genres}
        />
      ))}
    </div>
  )
}
