import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { useSelector } from 'react-redux'
import { kinopoiskApi } from '../../API/kinopoiskAPI'
import { FilmListContainer } from '../../components/filmListContainer/FilmListContainer'
import { Loader } from '../../components/loader/Loader'
import { RootState } from '../../store/store'
import './catalog.css'

function generateYears() {
  const ar = []
  for (let i = 2023; i >= 1890; i -= 1) {
    ar.push(i)
  }
  return ar.map((e) => <option key={e} value={e}>{e}</option>)
}

export function Catalog() {
  const [currentPageState, setCurrentPageState] = useState(0)
  const [countPages, setCountPages] = useState(0)
  const [filters, setFilters] = useState({
    sortBy: 'RATING',
    country: '',
    rating: 5,
    minYear: '',
    maxYear: '',
  })

  const searchLine = useSelector((state : RootState ) => state.films.search)

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected
    setCurrentPageState(page)
  }

  const { data: films, isFetching: filmsFetching, isSuccess } = kinopoiskApi.useGetFilmsWithFiltersQuery({
    page: currentPageState + 1, order: filters.sortBy, keyword: searchLine, country: filters.country, ratingFrom: filters.rating, yearFrom: filters.minYear, yearTo: filters.maxYear,
  })

  if (countPages === 0 && isSuccess && films.totalPages) {
    setCountPages(films.totalPages + 1)
  }

  const sortHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, sortBy: e.target.value })
  }

  const countryHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, country: e.target.value })
  }

  const ratingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, rating: +e.target.value })
  }

  const maxYearHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, maxYear: e.target.value })
  }

  const minYearHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, minYear: e.target.value })
  }
  // if(isSuccess) console.log(films)

  return (

    <div className="w-full container flex flex-col justify-center align-middle items-center">

      <div className="flex justify-center gap-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ????????????:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.country} onChange={countryHandler}>
            <option selected value="">??????</option>
            <option value={34}>????????????</option>
            <option value={33}>????????</option>
            <option value={1}>??????</option>
            <option value={3}>??????????????</option>
            <option value={49}>?????????? ??????????</option>
            <option value={5}>????????????????????????????</option>
            <option value={16}>????????????</option>
            <option value={10}>????????????</option>
            <option value={8}>??????????????</option>
            <option value={9}>????????????????</option>
            <option value={44}>????????????</option>
            <option value={6}>????????????</option>
            <option value={17}>??????????</option>
            <option value={22}>????????????????</option>
            <option value={11}>??????????????</option>
            <option value={27}>??????????????</option>
            <option value={45}>??????????????</option>
            <option value={23}>????????????????????</option>
            <option value={63}>????????????</option>
            <option value={27}>??????????????</option>
          </select>

        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ?????? ??:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.minYear} onChange={minYearHandler}>
            <option selected value="">-</option>
            {generateYears()}
          </select>

        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ????:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.maxYear} onChange={maxYearHandler}>
            <option selected value="3000">-</option>
            {generateYears()}
          </select>

        </label>

        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ?????????????? ????
          {' '}
          <b>{filters.rating}</b>
          <input id="minmax-range" type="range" min="0" max="9" value={filters.rating} onChange={ratingHandler} className="range-lg w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-3" />

        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ???????????????????? ????:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.sortBy} onChange={sortHandler}>
            <option selected value="RATING">????????????????</option>
            <option value="NUM_VOTE">????????????????????????</option>
            <option value="YEAR">????????</option>
          </select>

        </label>

      </div>

      {(!isSuccess || filmsFetching)  ? <Loader /> : (
        <FilmListContainer films={films.items!} />
      )}
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="????????????"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={countPages - 1}
        previousLabel="??????????"
        forcePage={currentPageState}
      />
    </div>
  )
}
