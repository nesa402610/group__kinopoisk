import { useParams } from 'react-router-dom'
import { useGetFilmByIdQuery } from '../../API/kinopoiskAPI'
import { Loader } from '../../components/loader/Loader'

export function FilmDetailed() {
  const { ID } = useParams()
  const { data: film, error, isLoading } = useGetFilmByIdQuery(ID)
  if (isLoading) return <Loader />
  return (
    <div className="container">
      <div className="flex my-4 gap-4">
        <div className="flex basis-1/3 rounded-lg overflow-hidden relative">
          <span className={`absolute p-2 text-2xl font-bold${film.ratingKinopoisk > 7 ? ' text-green-500' : ' text-orange-500'}`}>{film.ratingKinopoisk}</span>
          <img src={film.coverUrl ?? film.posterUrl} alt="обложка фильма" />
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
          <div className="mt-8 font-bold">
            <a href={film.webUrl} target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition-all">Подробнее на кинопоске</a>
          </div>
        </div>
      </div>
    </div>
  )
}
