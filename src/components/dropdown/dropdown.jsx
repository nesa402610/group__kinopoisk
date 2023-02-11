import { useQuery } from '@tanstack/react-query'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Kinopoisk, TOP_100_POPULAR_FILMS } from '../../API/kinopoisk'
import { kinopoiskApi } from '../../API/kinopoiskAPI'
import { setSearch } from '../../store/slices/filmsSlice'
import { useDebounce } from '../coustomHooks/useDebounse'
import { Loader } from '../loader/Loader'

import style from './Dropdown.module.css'

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
  const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY']

  const getProductsQueryKey = () => PRODUCTS_QUERY_KEY.concat(Object.values(search))

  useEffect(() => {
    if (input) {
      setdropdownStateWithInput({ open: true })
      setdropdownStateWithNoInput({ open: false })
    }
  }, [input])

  const { data: filmsSearchuning, isFetching } = useQuery({
    queryKey: getProductsQueryKey,
    queryFn: () => Kinopoisk.fetchGetActorByName(input, 1),
    onSuccess: () => console.log(filmsSearchuning),
  })

  const {
    data: popularFilms, isFetching: popularFilmsFetching,
  } = kinopoiskApi.useGetTop250Query({ page: 1, type: TOP_100_POPULAR_FILMS })

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
        {isFetching ? <Loader /> : (
          <p className={style.title}>Возможно вы имели ввиду</p>
        // //   filmsSearchuning.items.slice(0, 10).map((film) => (
        // //     <div key={film.filmId} className={style.styles_mainLink}>

        // //       <div className={style.styles_root}>

        // //         <div className={style.styles_mainContainer}>
        // //           <NavLink class={style.styles_mainLink} href=""><span /></NavLink>

        // //           <div className={style.styles_imgContainer}>
        // //             <img className={style.styles_img} alt={film.nameRu} src={film.posterUrlPreview} />
        // //           </div>
        // //           <div className={style.styles_info}>
        // //             <h4 className={style.styles_4}>
        // //               {film.nameRu}
        // //               {' '}
        // //             </h4>
        // //             <div className={style.styles_subtitleLine}>
        // //               <div className={style.styles_rating}>
        // //                 <div className={style.styles_rootPositive}>{film.rating}</div>
        // //               </div>
        // //               <span className={style.styles_subtitle4}>
        // //                 тут поменять,
        // //                 {' '}
        // //                 {film.year}
        // //               </span>
        // //             </div>
        // //           </div>
        // //         </div>
        // //       </div>
        // //     </div>
        //   ))

        )}

      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.container}>
        <p className={style.title}>Входит в топ 10 за месяц</p>
        {popularFilmsFetching ? <Loader /> : (
          popularFilms.films.slice(0, 10).map((film) => (
            <div key={film.filmId} className={style.styles_mainLink}>

              <div className={style.styles_root}>

                <div className={style.styles_mainContainer}>
                  <NavLink class={style.styles_mainLink} href=""><span /></NavLink>

                  <div className={style.styles_imgContainer}>
                    <img className={style.styles_img} alt={film.nameRu} src={film.posterUrlPreview} />
                  </div>
                  <div className={style.styles_info}>
                    <h4 className={style.styles_4}>
                      {film.nameRu}
                      {' '}
                    </h4>
                    <div className={style.styles_subtitleLine}>
                      <div className={style.styles_rating}>
                        <div className={style.styles_rootPositive}>{film.rating}</div>
                      </div>
                      <span className={style.styles_subtitle4}>
                        тут поменять,
                        {' '}
                        {film.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))

        )}
      </div>
      )}
    </div>
  )
}
