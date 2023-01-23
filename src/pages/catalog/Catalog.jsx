/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { Kinopoisk, TOP_250_BEST_FILMS } from '../../API/kinopoisk'
import { FilmListContainer } from '../../components/filmListContainer/FilmListContainer'
import { Loader } from '../../components/loader/Loader'
import s from './catalog.css'

export function Catalog() {
  const [currentPageState, setCurrentPageState] = useState(0)
  const [countPages, setCountPages] = useState(0)
  const [sortBy, setSortBy] = useState('RATING')
  const [country, setCountry] = useState('')

  const searchLine = useSelector((state) => state.films.search)
  const handlePageClick = (event) => {
    const page = event.selected
    setCurrentPageState(page)
  }
  const { data, isFetching } = useQuery({
    queryKey: [currentPageState, searchLine, sortBy, country],
    queryFn: () => Kinopoisk.fetchGetFilms(currentPageState + 1, sortBy, searchLine, country),
    onSuccess: () => console.log(data),
  })
  if (countPages === 0 && !isFetching) {
    setCountPages(data.totalPages + 1)
  }

  const sortHandler = (e) => {
    setSortBy(e.target.value)
  }

  const countryHandler = (e) => {
    setCountry(e.target.value)
  }

  return (

    <div className="w-full container flex flex-col justify-center align-middle items-center">

      <div className="flex justify-center gap-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Страна:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={country} onChange={countryHandler}>
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
          Сортировка по:
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={sortBy} onChange={sortHandler}>
            <option selected value="RATING">Рейтингу</option>
            <option value="NUM_VOTE">Популярности</option>
            <option value="YEAR">Году</option>
          </select>

        </label>

      </div>

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

      {isFetching ? <Loader /> : (
        <FilmListContainer films={data.items} />
      )}

    </div>
  )
}
