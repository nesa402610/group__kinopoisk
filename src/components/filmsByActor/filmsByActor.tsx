import React from 'react'
import { FilmsCarousel } from '../../pages/homepage/filmsCarousel/FilmsCarousel'


export function FilmsByActor({film}:{film: []}){
    
    
    // film.map((ID)=> {
    //     return ID.filmId
    //   }
    // )
    // const {data, isLoading, isSuccess} = useGetPhotosByFilmIdQuery(ID)
    console.log(film)
    return (
        <div className='max-w-5xl'>
            <h3 className="text-lg font-bold">Список фильмов</h3>
            <FilmsCarousel films={film.slice(0, 8)} page='detail' />
        </div>
    )
}