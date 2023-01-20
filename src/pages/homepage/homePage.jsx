/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Kinopoisk } from '../../API/kinopoisk'
import { HomepageCard } from './homepageCard/HomepageCard'
import s from './homepage.css'

export function HomePage() {
  const [currentPageState, setCurrentPageState] = useState(0)
  const handlePageClick = (event) => {
    const page = event.selected
    console.log('выбрана страница ', page + 1)
    setCurrentPageState(page)
    console.log('выбрана страница ', page + 1)
  }

  const { data, isFetching } = useQuery({
    queryKey: [currentPageState],
    queryFn: () => Kinopoisk.fetchGetGilms(currentPageState + 1),
  })
  if (isFetching) return 'Loading...'
  return (

    <div className="w-full container flex flex-col justify-center align-middle">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={data.pagesCount - 1}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPageState}
      />
      <div className="flex justify-center mb-4 flex-wrap">
        {data.films.map((film) => <HomepageCard name={film.nameRu} year={film.year} rating={film.rating} img={film.posterUrlPreview} id={film.filmId} genres={film.genres} />)}
      </div>

      {/* <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={data.pagesCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}

    </div>
  )
}
