import {useParams} from 'react-router-dom'
import {useGetActorsByFilmIdQuery, useGetFilmByIdQuery } from '../../API/kinopoiskAPI'
import {Loader} from '../../components/loader/Loader'
import {ShortInfo} from '../../components/filmDetailed/ShortInfo'
import {FilmTrailers} from '../../components/filmTrailers/FilmTrailers'
import React from 'react'
import {IActorByFilmId } from '../../types/types'
import { FilmImages } from '../../components/filmImages/FilmImages'



export function FilmDetailed() {
  const {ID} = useParams()
  const {data: film, error: filmErr, isLoading: filmLoad} = useGetFilmByIdQuery(ID!)
  const {data: actors, isLoading: actorsLoad} = useGetActorsByFilmIdQuery(ID!)
  if (filmLoad || !film || !actors) return <Loader/>
  if (filmErr || !ID) return <h1 className="text-center font-bold text-2xl">Произошла ошибка</h1>
  return (
    <div className="container w-full">
      <div className="flex my-4 gap-4 items-start flex-wrap	">
        <div className="flex flex-col gap-4 max-w-md">
          <div
          className="flex justify-center rounded-lg overflow-hidden relative"
          style={{backgroundColor: '#eeeeee'}}
          >
            <div className="absolute py-1 px-4 justify-between text-2xl font-bold flex gap-2 bg-neutral-800/80 w-full">
              <ShortInfo title="КП">
                <span className={`${film.ratingKinopoisk > 7 ? ' text-green-500' : ' text-orange-500'}`}>
                  {film.ratingKinopoisk}
                </span>
              </ShortInfo>
              <ShortInfo title="IMDB">
                <span className={`${film.ratingImdb > 7 ? ' text-green-500' : ' text-orange-500'}`}>
                  {film.ratingImdb}
                </span>
              </ShortInfo>
              <ShortInfo title="ГОД">
                <span>{film.year}</span>
              </ShortInfo>
              <ShortInfo title="МИНУТ">
                <span>{film.filmLength}</span>
              </ShortInfo>
            </div>
            <img src={film.coverUrl ?? film.posterUrl} alt="обложка фильма"/>
          </div>
          <div className='flex justify-center rounded-lg overflow-hidden bg-neutral-800'>
            <FilmImages  ID={ID}/>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 flex-1 bg-neutral-700 p-4 rounded-lg max-w-5xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex gap-1 items-baseline">
                <h1 className="text-2xl font-bold">
                  {film.nameRu}
                </h1>
              </div>
              <div className="flex gap-1 text-sm text-neutral-400">
                <h2 className="">{film.nameOriginal}</h2>
                {film.nameOriginal && film.slogan ? '|' : ''}
                <h3 className="italic">{film.slogan}</h3>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Описание</h3>
              <p>{film.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Список актеров</h3>
              <div className={'flex gap-2 flex-wrap'}>{actors.map((actor: IActorByFilmId) =>
                <div className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer'}>
                  {actor.nameRu !== '' ? actor.nameRu : actor.nameEn}
                </div>
              )}</div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Жанры</h3>
              <div className="flex gap-1">
                {film.genres.map((genre) =>
                  <div className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer'}>
                    <span key={genre.genre} className="capitalize">{genre.genre}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="font-bold">
              <a
                href={film.webUrl}
                target="_blank"
                rel="noreferrer"
                className="italic hover:text-neutral-400 transition-all"
              >
                Подробнее на кинопоске
              </a>
            </div>
          </div>
        </div>
      </div>

      <FilmTrailers ID={ID!}/>

    </div>
  )
}
