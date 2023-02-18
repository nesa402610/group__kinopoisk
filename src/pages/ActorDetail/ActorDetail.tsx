



import {useParams} from 'react-router-dom'
import {useGetActorByIdQuery } from '../../API/kinopoiskAPI'
import {Loader} from '../../components/loader/Loader'
// import {ShortInfo} from '../../components/actorDetailed/ShortInfo'
// import {actorTrailers} from '../../components/actorTrailers/actorTrailers'
import React from 'react'
import { FilmImages } from '../../components/filmImages/FilmImages'
// import {IActorByactorId } from '../../types/types'
// import { actorImages } from '../../components/actorImages/actorImages'



export function ActorDetail() {
  const {ID} = useParams()
  const {data: actor, error: actorErr, isLoading: actorLoad} = useGetActorByIdQuery(ID!)
  if (actorLoad || !actor) return <Loader/>
  if (actorErr || !ID) return <h1 className="text-center font-bold text-2xl">Произошла ошибка</h1>
  return (
    <div className="container w-full">
      <div className="flex my-4 gap-4 items-start flex-wrap	">
        <div className="flex flex-col gap-4 max-w-md">
          {/* <div
          className="flex justify-center rounded-lg overflow-hidden relative"
          style={{backgroundColor: '#eeeeee'}}
          >
            <div className="absolute py-1 px-4 justify-between text-2xl font-bold flex gap-2 bg-neutral-800/80 w-full">
              <ShortInfo title="КП">
                <span className={`${actor.ratingKinopoisk > 7 ? ' text-green-500' : ' text-orange-500'}`}>
                  {actor.ratingKinopoisk}
                </span>
              </ShortInfo>
              <ShortInfo title="IMDB">
                <span className={`${actor.ratingImdb > 7 ? ' text-green-500' : ' text-orange-500'}`}>
                  {actor.ratingImdb}
                </span>
              </ShortInfo>
              <ShortInfo title="ГОД">
                <span>{actor.year}</span>
              </ShortInfo>
              <ShortInfo title="МИНУТ">
                <span>{actor.actorLength}</span>
              </ShortInfo>
            </div>
            <img src={actor.coverUrl ?? actor.posterUrl} alt="обложка фильма"/>
          </div> */}
          <div className='flex justify-center rounded-lg overflow-hidden bg-neutral-800'>
            <FilmImages  ID={ID}/>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 flex-1 bg-neutral-700 p-4 rounded-lg max-w-5xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex gap-1 items-baseline">
                <h1 className="text-2xl font-bold">
                  {actor.nameRu}
                </h1>
              </div>
              {/* <div className="flex gap-1 text-sm text-neutral-400">
                <h2 className="">{actor.nameOriginal}</h2>
                {actor.nameRu && actor.slogan ? '|' : ''}
                <h3 className="italic">{actor.slogan}</h3>
              </div> */}
            </div>
            <div>
              <h3 className="text-lg font-bold">Описание</h3>
              <p>{actor.facts?.map((fact)=>
              <div className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer'}>
              <span key={fact} className="capitalize">{fact}</span>
            </div>
              )}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Список актеров</h3>
              {/* <div className={'flex gap-2 flex-wrap'}>{actors.map((actor: IActorByactorId) =>
                <div className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer'}>
                  {actor.nameRu !== '' ? actor.nameRu : actor.nameEn}
                </div>
              )}</div> */}
            </div>
            <div>
              <h3 className="text-lg font-bold">Жанры</h3>
              {/* <div className="flex gap-1">
                {actor.genres.map((genre) =>
                  <div className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer'}>
                    <span key={genre.genre} className="capitalize">{genre.genre}</span>
                  </div>
                )}
              </div> */}
            </div>
            <div className="font-bold">
              <a
                href={actor.webUrl}
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
{/* 
      <actorTrailers ID={ID!}/> */}

    </div>

  )
}
