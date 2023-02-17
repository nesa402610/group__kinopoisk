import Carousel from 'react-multi-carousel'
import { FilmCardSmall } from '../../../components/filmCardSmall/FilmCardSmall'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import { FilmTop } from '../../../types/types'

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 1024 },
    items: 7,
    slidesToSlide: 7, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
}

export function FilmsCarousel({ films }: {films: FilmTop[]}) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={7000}
      >
        {films.map((film) => <FilmCardSmall key={film.filmId} name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} />)}
      </Carousel>
    </div>
  )
}
