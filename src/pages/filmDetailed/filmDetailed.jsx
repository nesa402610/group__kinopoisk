import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Kinopoisk } from '../../API/kinopoisk'

export function FilmDetailed() {
  const [film, setFilm] = useState({})
  const { ID } = useParams()
  useEffect(() => {
    Kinopoisk.fetchFilmByID(ID).then((r) => {
      setFilm(r)
      console.log(r)
    })
  }, [])
  return (
    <div className="container">
      <div className="flex my-4 gap-4">
        <div className="flex basis-1/3 rounded-lg overflow-hidden">
          <img src={film.coverUrl} alt="обложка фильма" />
        </div>
        <div className="flex flex-col flex-1 bg-neutral-700 p-4 rounded-lg">
          <div className="flex flex-col">
            <div className="flex gap-1 items-baseline">
              <h1 className="text-2xl font-bold">
                {film.nameRu}
              </h1>
              <span className="text-neutral-300">
                (
                {film.year}
                )
              </span>
            </div>
            <div className="flex gap-1 text-sm text-neutral-400">
              <h2 className="">{film.nameOriginal}</h2>
              |
              <h3 className="italic">{film.slogan}</h3>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Описание</h3>
            <p>{film.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
