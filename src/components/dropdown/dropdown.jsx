import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import {
  AWAIT_FILMS_BY_NAME,
  kinopoiskApi, TOP_100_POPULAR_FILMS,
} from '../../API/kinopoiskAPI'
import { setSearch } from '../../store/slices/filmsSlice'
import { useDebounce } from '../coustomHooks/useDebounse'
import { Loader } from '../loader/Loader'

import style from './Dropdown.module.css'
import { DropDownNoInpyt } from './DropDownNoInpyt/DropDownNoInpyt'
import { DropDownWithInputActors } from './DropDownWithInputActors/DropDownWithInputActors'
import { DropDownWithInputFilms } from './DropDownWithInputFilms/DropDownWithInputFilms'

export default function Dropdown() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { search } = useSelector((state) => state.films)
  const dispatch = useDispatch()
  const container = useRef()
  const [dropdownStateWithInput, setdropdownStateWithInput] = useState({ open: false })
  const [dropdownStateWithNoInput, setdropdownStateWithNoInput] = useState({ open: false })
  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const debounceValue = useDebounce(input, 350)

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      search: input,
    })
  }, [input])

  const handleDropdownInput = (e) => {
    dispatch(setSearch(e.target.value))
    setdropdownStateWithInput({ open: true })
    setInput(e.target.value)
  }

  const handleDropdownClick = (e) => {
    if (e.target.value === '') {
      setdropdownStateWithNoInput({ open: true })
    } else {
      handleDropdownInput(e)
    }
  }
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setdropdownStateWithInput({ open: false })
      setdropdownStateWithNoInput({ open: false })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [search])

  useEffect(() => {
    dispatch(setSearch((debounceValue)))
  }, [debounceValue])

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

  useEffect(() => {
    if (input) {
      setdropdownStateWithInput({ open: true })
      setdropdownStateWithNoInput({ open: false })
    }
  }, [input])

  const {
    data: popularFilms, isFetching: popularFilmsFetching,
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_100_POPULAR_FILMS })

  const {
    data: films, isFetching: filmsFetching,
  } = kinopoiskApi.useGetFilmByNameQuery({ page: 1, keyword: input })

  const {
    data: actors, isFetching: actorsFetching,
  } = kinopoiskApi.useGetActorsByNameQuery({ page: 1, name: input })

  return (
    <div className=" flex-1" ref={container}>

      <input
        type="text"
        className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
        value={search}
        onChange={(e) => handleDropdownInput(e)}
        onClick={(e) => handleDropdownClick(e)}
      />
      {dropdownStateWithInput.open && (
      <div className={style.container}>
        <p className={style.title}>Возможно вы искали</p>
        {filmsFetching ? <Loader /> : <DropDownWithInputFilms films={films.items} /> }
        {actorsFetching ? <Loader /> : <DropDownWithInputActors actors={actors.items} /> }
      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.container}>
        <p className={style.title}>Входит в топ 10 за месяц</p>
        {popularFilmsFetching ? <Loader /> : <DropDownNoInpyt films={popularFilms.films} />}
      </div>
      )}
    </div>
  )
}
