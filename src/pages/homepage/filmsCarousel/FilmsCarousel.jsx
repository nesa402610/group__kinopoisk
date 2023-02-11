import Carousel from 'react-multi-carousel'
import { FilmCardSmall } from '../../../components/filmCardSmall/FilmCardSmall'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export function FilmsCarousel({ films }) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={7000}
      >
        {films.map((film) => <FilmCardSmall key={film.filmId} name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} genres={film.genres} />)}
      </Carousel>
    </div>
  )
}
