import React, {useState, useEffect} from 'react'
import { useGetFilmsByIdsQuery } from '../../API/kinopoiskAPI'
import { FilmsCarousel } from '../../pages/homepage/filmsCarousel/FilmsCarousel'
import { FilmDetailed } from '../../types/types'
import { Loader } from '../loader/Loader'


export function FilmsByActor({ids}:{ids: string[]}){
    console.log(ids)
    const {data: films, isLoading, isSuccess} = useGetFilmsByIdsQuery([...new Set(ids)])
    if(isSuccess) console.log('success')
    if(isLoading || !isSuccess) return <Loader />
    console.log(films)
    if(isSuccess) {
        console.log('success')
        const filtered = films.filter((e)=>e!==undefined && (e.nameRu) && (e.year) &&(e.ratingKinopoisk))
        return (
        <div className='max-w-5xl'>
            <h3 className="text-lg font-bold">Список фильмов</h3>
            <FilmsCarousel filmsDetailed={filtered} page='detail' />
        </div>
    )
    }else return  <div>Неудача</div>
    
}