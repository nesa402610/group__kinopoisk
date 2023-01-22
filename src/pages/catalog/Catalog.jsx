/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Kinopoisk, TOP_250_BEST_FILMS } from '../../API/kinopoisk'
import { FilmCard } from '../../components/filmCard/FilmCard'
import s from './catalog.css'

export function Catalog() {
  const [currentPageState, setCurrentPageState] = useState(0)
  const [countPages, setCountPages] = useState(0)
  const handlePageClick = (event) => {
    const page = event.selected
    setCurrentPageState(page)
  }
  const { data, isFetching } = useQuery({
    queryKey: [currentPageState],
    queryFn: () => Kinopoisk.fetchGetGilmsTop(currentPageState + 1, TOP_250_BEST_FILMS),
  })
  if (countPages === 0 && !isFetching) {
    setCountPages(data.pagesCount + 1)
  }
  return (

    <div className="w-full container flex flex-col justify-center align-middle">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="вперед"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={countPages}
        previousLabel="назад"
        renderOnZeroPageCount={null}
        forcePage={currentPageState}
      />

      {isFetching ? 'LOADING...' : (
        <div className="flex justify-center mb-4 flex-wrap">
          {data.films.map((film) => <FilmCard name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} genres={film.genres} />)}
        </div>
      )}

    </div>
  )
}
