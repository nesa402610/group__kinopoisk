import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  kinopoiskApi, TOP_100_POPULAR_FILMS,
} from '../../API/kinopoiskAPI'
import { useDebounce } from '../../coustomHooks/useDebounse'
import { setSearch } from '../../store/slices/filmsSlice'
import { RootState, useAppDispatch } from '../../store/store'
import { Loader } from '../loader/Loader'


import style from './Dropdown.module.scss'
import { DropDownNoInpyt } from './DropDownNoInpyt/DropDownNoInpyt'
import { DropDownWithInputActors } from './DropDownWithInputActors/DropDownWithInputActors'
import { DropDownWithInputFilms } from './DropDownWithInputFilms/DropDownWithInputFilms'

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
  }, [input, setSearchParams])

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      search: input,
    })
  }, [input, searchParams, setSearchParams])

  const handleDropdownInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
    setdropdownStateWithInput({ open: true })
    setInput(e.target.value)
  }

  const handleDropdownClick = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('handleDropdownClick')
    const target = e.target
    if(target){
      if (target.value === '') {
      setdropdownStateWithNoInput({ open: true })
      console.log('handleDropdownClick: Open')
    } else {
      handleDropdownInput(e)
    }
    }

  }

  const handleClickOutside = (ev: MouseEvent) => {
    if(ev.target){
      console.log(ev.target)
      console.log(container)
      if (!container.current?.contains(ev.target as Node)) {
      setdropdownStateWithInput({ open: false })
      setdropdownStateWithNoInput({ open: false })
      }
    }

  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    console.log('woks useeffect')
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    dispatch(setSearch((debounceValue)))
  }, [debounceValue, dispatch])

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input, setSearchParams])

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
    <div className=" flex-1">

      <input
        type="text"
        className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
        value={search}
        onChange={(e) => handleDropdownInput(e)}
        onFocus={(e)=> handleDropdownClick(e)}
      />
      {dropdownStateWithInput.open && (
      <div className={style.container} ref={container}>
        <p className={style.title}>Возможно вы искали</p>
        {(filmsFetching || !filmsSuccess) ? <Loader /> : <DropDownWithInputFilms films={films.items!} /> }
        {(actorsFetching || !actorsSuccess) ? <Loader /> : <DropDownWithInputActors actors={actors.items} /> }
      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.container} ref={container}>
        <p className={style.title}>Входит в топ 10 за месяц</p>
        {(popularFilmsFetching || !popularFilmsSuccess) ? <Loader /> : <DropDownNoInpyt films={popularFilms.films!} />}
      </div>
      )}
    </div>
  )
}