import Carousel from 'react-multi-carousel'
import { FilmCardSmall } from '../../../components/filmCardSmall/FilmCardSmall'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import { FilmDetailed, FilmTop } from '../../../types/types'

export function FilmsCarousel({ films = undefined, filmsDetailed = undefined, page }: {films?: FilmTop[] | undefined, filmsDetailed?:FilmDetailed[] | undefined, page: 'home' | 'detail'}) {
  console.log(`films: ${films}`)
  console.log(`filmsDetailed: ${filmsDetailed}`)

  const responsive = page==='home' ?{
    desktop: {
      breakpoint: { max: 10000, min: 1024 },
      items: 7,
      slidesToSlide: 7, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, 
    },
  } : {
    desktop: {
      breakpoint: { max: 10000, min: 1024 },
      items: 4,
      slidesToSlide: 4, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  }

  if(films !== undefined && filmsDetailed===undefined){
    return (
    <div className='w-full'>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={7000}
      >
        {films !== undefined ? films.map((film) => <FilmCardSmall key={film.filmId} name={film.nameRu} year={film.year ? film.year : ''} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} />) : ''}
      </Carousel>
    </div>
  )}else if(films === undefined && filmsDetailed !==undefined){
    return (
      <div className='w-full'>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={7000}
        >
          {filmsDetailed ? filmsDetailed.map((film) => <FilmCardSmall key={film.kinopoiskId} name={film.nameRu} year={film.year.toString()} rating={film.ratingKinopoisk.toString()} img={film.posterUrlPreview} id={film.kinopoiskId} />) : ''}
        </Carousel>
      </div>
    )
  }else return <div>error</div>
}
