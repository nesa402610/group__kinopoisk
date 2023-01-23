/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { Kinopoisk } from '../../API/kinopoisk'
import { FilmListContainer } from '../../components/filmListContainer/FilmListContainer'
import { Loader } from '../../components/loader/Loader'
import s from './catalog.css'

function generateYears() {
  const ar = []
  for (let i = 2023; i >= 1890; i -= 1) {
    ar.push(i)
  }
  return ar.map((e) => <option value={e}>{e}</option>)
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

  const searchLine = useSelector((state) => state.films.search)
  const handlePageClick = (event) => {
    const page = event.selected
    setCurrentPageState(page)
  }
  const { data, isFetching } = useQuery({
    queryKey: [currentPageState, searchLine, filters],
    queryFn: () => Kinopoisk.fetchGetFilms(currentPageState + 1, filters.sortBy, searchLine, filters.country, filters.rating, filters.minYear, filters.maxYear),
    onSuccess: () => console.log(data),
  })
  if (countPages === 0 && !isFetching) {
    setCountPages(data.totalPages + 1)
  }

  const sortHandler = (e) => {
    setFilters({ ...filters, sortBy: e.target.value })
  }

  const countryHandler = (e) => {
    setFilters({ ...filters, country: e.target.value })
  }

  const ratingHandler = (e) => {
    setFilters({ ...filters, rating: e.target.value })
  }

  const maxYearHandler = (e) => {
    setFilters({ ...filters, maxYear: e.target.value })
  }

  const minYearHandler = (e) => {
    setFilters({ ...filters, minYear: e.target.value })
  }

  return (

    <div className="w-full container flex flex-col justify-center align-middle items-center">

      <div className="flex justify-center gap-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Страна:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.country} onChange={countryHandler}>
            <option selected value="">Все</option>
            <option value={34}>Россия</option>
            <option value={33}>СССР</option>
            <option value={1}>США</option>
            <option value={3}>Франция</option>
            <option value={49}>Южная Корея</option>
            <option value={5}>Великобритания</option>
            <option value={16}>Япония</option>
            <option value={10}>Италия</option>
            <option value={8}>Испания</option>
            <option value={9}>Германия</option>
            <option value={44}>Турция</option>
            <option value={6}>Швеция</option>
            <option value={17}>Дания</option>
            <option value={22}>Норвегия</option>
            <option value={11}>Гонконг</option>
            <option value={27}>Австрия</option>
            <option value={45}>Бельгия</option>
            <option value={23}>Нидерланды</option>
            <option value={63}>Греция</option>
            <option value={27}>Австрия</option>
          </select>

        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Год с:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.minYear} onChange={minYearHandler}>
            <option selected value="">-</option>
            {generateYears()}
          </select>

        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          по:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.maxYear} onChange={maxYearHandler}>
            <option selected value="">-</option>
            {generateYears()}
          </select>

        </label>

        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Рейтинг от
          {' '}
          <b>{filters.rating}</b>
          <input id="minmax-range" type="range" min="0" max="9" value={filters.rating} onChange={ratingHandler} className="range-lg w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-3" />

        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Сортировка по:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={filters.sortBy} onChange={sortHandler}>
            <option selected value="RATING">Рейтингу</option>
            <option value="NUM_VOTE">Популярности</option>
            <option value="YEAR">Году</option>
          </select>

        </label>

      </div>

      {isFetching ? <Loader /> : (
        <FilmListContainer films={data.items} />
      )}
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="вперед"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={countPages - 1}
        previousLabel="назад"
        renderOnZeroPageCount={null}
        forcePage={currentPageState}
      />
    </div>
  )
}
