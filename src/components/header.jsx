import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../store/slices/filmsSlice'

export function Header() {
  const { isAuth, name } = useSelector((state) => state.user)
  const { search } = useSelector((state) => state.films)
  const dispatch = useDispatch()
  return (
    <header className="bg-neutral-800">
      <div className="container m-auto">
        <div className="flex justify-between gap-8 py-4">
          <div className="gap-4 flex items-center">
            <Link to="/">Главная</Link>
            <Link to="/films">Фильмы</Link>
            <Link to="/about">О проекте</Link>
          </div>
          <div className="flex-1">
            <input
              type="text"
              className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
          </div>
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
