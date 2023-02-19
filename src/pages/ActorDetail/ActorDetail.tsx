


import React from 'react'
import {Link, useParams} from 'react-router-dom'

import {useGetActorByIdQuery } from '../../API/kinopoiskAPI'
import { FilmsByActor } from '../../components/filmsByActor/filmsByActor'
import {Loader} from '../../components/loader/Loader'
import { FamilyForActor } from '../../types/types'



export function ActorDetail() {

 
  const {ID} = useParams()
  const {data: actor, error: actorErr, isLoading: actorLoad} = useGetActorByIdQuery(ID!)
  if (actorLoad || !actor) return <Loader/>
  console.log(actor)
  function strokeReverse (stroke: string){
    return stroke.split("-").reverse().join("-");
  }
  if (actorErr || !ID) return <h1 className="text-center font-bold text-2xl">Произошла ошибка</h1>
  return (
    <div className="container w-full">
      <div className="flex justify-center my-4 gap-4 items-start flex-wrap	w-full">
        <div className="flex flex-col gap-4 max-w-md basis-1/3">
          <div
          className="flex justify-center rounded-lg overflow-hidden relative bg-cover"
          style={{backgroundColor: '#eeeeee'}}
          >
  
            <img className='w-full' src={actor.posterUrl} alt="обложка фильма"/>
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
              <div className="flex gap-1 text-sm text-neutral-400">
                <h2 className="">{actor.nameEn}</h2>
             
              </div>
            </div>
            <div>


              <h3 className="text-lg font-bold">О персоне</h3>
              <p><span className="text-neutral-400">Возраст:</span> {actor.age} лет</p>
              <p><span className="text-neutral-400">Дата рождения:</span> {strokeReverse(actor.birthday)}</p>
              {actor.death ? <p><span className="text-neutral-400">Дата смерти:</span> {strokeReverse(actor.death)}</p>: null }
              {actor.deathplace ?  <p><span className="text-neutral-400">Место смерти:</span> {actor.deathplace}</p>: null}
             {actor.hasAwards ? <p><span className="text-neutral-400">Количесвто наград:</span> {actor.hasAwards} шт.</p> :
             null } 
              <p><span className="text-neutral-400">Карьера:</span> {actor.profession}</p>
              <p><span className="text-neutral-400">Количество фильмов:</span> {actor.films.length} шт.</p>

              {actor.spouses.length !== 0 ?  <div className='flex'><p><span className="text-neutral-400">Семья:</span></p>{actor.spouses.map((person: FamilyForActor)=>
              <div key={person.personId} className={'bg-neutral-800 px-2 py-1 rounded-full hover:bg-neutral-900 transition-all cursor-pointer inline'}>
                  <a href={person.webUrl}>
                {person.name}
                </a>
              </div> 
              )} </div> : null }

            </div>
            
              <FilmsByActor film = {actor.films} />
              {actor.facts ?
              <div>
                <h3  className="text-lg font-bold">
                Знаете ли вы, что…
                </h3>
                <ul className='list-disc ml-5'>
               {actor.facts.map((fact)=>
               <li key={fact}>
                {fact}
               </li>
               ) }
               </ul>
              </div> : null}

              
           
           
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
