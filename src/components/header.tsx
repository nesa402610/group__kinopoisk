import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setSearch } from '../store/slices/filmsSlice'
import Dropdown from './dropdown/dropdown'
import React from 'react'
import { RootState, useAppDispatch } from '../store/store'

export function Header() {
  const { isAuth, name } = useSelector((state : RootState) => state.user)
  const { search } = useSelector((state : RootState) => state.films)
  const dispatch = useAppDispatch()
  const location = useLocation()
  console.log({ location })
  return (
    <header className="bg-neutral-800">
      <div className="container m-auto">
        <div className="flex justify-between gap-8 py-4">
          <div className="gap-4 flex items-center">
            <Link to="/">Главная</Link>
            <Link to="/films">Фильмы</Link>
            <Link to="/about">О проекте</Link>
          </div>

          {location.pathname === '/' ? <Dropdown /> : (
            <div className="flex-1">
              <input
                type="text"
                className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
              />
            </div>
          ) }

          <div className="gap-4 flex items-center">
            {!isAuth
              ? (
                <>
                  <Link to="/signup">Регистрация</Link>
                  <Link to="/signin">Вход</Link>
                </>
              )
              : (
                <Link to="profile">
                  {`Профиль ${name}`}
                </Link>
              )}
          </div>
        </div>
      </div>
    </header>
  )
}
