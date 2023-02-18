import React from 'react'
import { useGetSimilarByFilmIdQuery } from '../../API/kinopoiskAPI'
import { FilmsCarousel } from '../../pages/homepage/filmsCarousel/FilmsCarousel'
import { Loader } from '../loader/Loader'

export function SimilarFilms({ID}:{ID: string}){
  const {data: similarFilms, isLoading, isSuccess} = useGetSimilarByFilmIdQuery(ID!)
    console.log(similarFilms)
    if(isLoading || !isSuccess){
        return <Loader />
    }
    return (
        <div className='max-w-5xl'>
            <h3 className="text-lg font-bold">Похожие фильмы</h3>
            <FilmsCarousel films={similarFilms.items.slice(0, 8)} page='detail' />
        </div>
    )
}