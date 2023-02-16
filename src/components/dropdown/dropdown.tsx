import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  kinopoiskApi, TOP_100_POPULAR_FILMS,
} from '../../API/kinopoiskAPI'
import { setSearch } from '../../store/slices/filmsSlice'
import { RootState, useAppDispatch } from '../../store/store'
import { Loader } from '../loader/Loader'

// @ts-ignore
import style from './Dropdown.module.css'
import { DropDownNoInpyt } from './DropDownNoInpyt/DropDownNoInpyt'
// @ts-ignore
import { DropDownWithInputActors } from './DropDownWithInputActors/DropDownWithInputActors'
// @ts-ignore
import { DropDownWithInputFilms } from './DropDownWithInputFilms/DropDownWithInputFilms'
import {useDebounce} from "../../coustomHooks/useDebounse";

export default function Dropdown() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { search } = useSelector((state : RootState) => state.films)
  const dispatch = useAppDispatch()
  const container = useRef<HTMLDivElement>(null)
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

  const handleDropdownInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleDropdownInput')
    dispatch(setSearch(e.target.value))
    setdropdownStateWithInput({ open: true })
    setInput(e.target.value)
  }

  const handleDropdownClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log('handleDropdownClick')
    const target = e.target  as HTMLButtonElement
    if(target){
      if (target.value === '') {
      setdropdownStateWithNoInput({ open: true })
    } else {
      // handleDropdownInput(e)
    }
    }

  }
  const handleClickOutside = (e: React.MouseEvent<MouseEvent>) : void => {
    if(e.target){
      console.log(e.target)
      console.log(container)
      if (container.current && !container.current.contains(e.target as Node)) {
      setdropdownStateWithInput({ open: false })
      setdropdownStateWithNoInput({ open: false })
      }
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
    data: popularFilms, isFetching: popularFilmsFetching, isSuccess: popularFilmsSuccess
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_100_POPULAR_FILMS })

  const {
    data: films, isFetching: filmsFetching, isSuccess: filmsSuccess
  } = kinopoiskApi.useGetFilmsWithFiltersQuery({ page: 1, keyword: input })

  const {
    data: actors, isFetching: actorsFetching, isSuccess: actorsSuccess
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
        {(filmsFetching || !filmsSuccess) ? <Loader /> : <DropDownWithInputFilms films={films.items} /> }
        {actorsFetching ? <Loader /> : <DropDownWithInputActors actors={actors.items} /> }
      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.container}>
        <p className={style.title}>Входит в топ 10 за месяц</p>
        {(popularFilmsFetching || !popularFilmsSuccess) ? <Loader /> : <DropDownNoInpyt films={popularFilms.films} />}
      </div>
      )}
    </div>
  )
}
