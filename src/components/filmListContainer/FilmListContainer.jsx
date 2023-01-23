import { FilmCard } from '../filmCard/FilmCard'

export function FilmListContainer({ films }) {
  return (
    <div className="flex justify-center mb-4 flex-wrap">
      {films.map((film) => <FilmCard name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.kinopoiskId} genres={film.genres} />)}
    </div>
  )
}
