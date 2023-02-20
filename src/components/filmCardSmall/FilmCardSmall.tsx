import React from 'react'
import {Link} from 'react-router-dom'
import s from './filmCardSmall.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setFavouriteFilms} from "../../store/slices/filmsSlice";

interface FilmCardSmallProps {
  name: string,
  year?: string,
  rating?: string,
  img: string,
  id: number
}

export function FilmCardSmall({name, year = '', rating = '', img, id}: FilmCardSmallProps) {
  const {favourite} = useAppSelector(state => state.films)
  const dispatch = useAppDispatch()
  const favouriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    const favFilms = localStorage.getItem('favFilms')
    if (favFilms) {
      const parsed = JSON.parse(favFilms)
      if (parsed.includes(id)) {
        const removed = parsed.filter((film: number) => film !== id)

        if (removed.length === 0) {
          localStorage.removeItem('favFilms')
        } else localStorage.setItem('favFilms', JSON.stringify(removed))

      } else {
        const added = [...parsed, id]
        localStorage.setItem('favFilms', JSON.stringify(added))
      }
      dispatch(setFavouriteFilms(parsed))
    } else {
      localStorage.setItem('favFilms', JSON.stringify([id]))
    }
    dispatch(setFavouriteFilms())
  };

  return (
    <Link to={`/film/${id}`} className={s.container}>
      <div className={(favourite.includes(id) ? 'text-amber-600 ' : '') + 'absolute transition-all right-0 px-2 text-white text-3xl hover:text-neutral-300'}
           onClick={e => favouriteHandler(e)}>
        ♥
      </div>
      <img className="w-full" src={img} alt=""/>
      <div className="absolute bottom-0 text-white text-base w-full bg-black bg-opacity-80 text-sm p-2">
        <p className="font-bold text-center m-1">{name}</p>
        {year !== '' ? <p>
          Год:
          {' '}
          {year}
        </p> : ''}

      </div>
      {rating !== '' ? <div className={`${s.rating} ${+rating > 8 ? s.gold : s.gray}`}>{rating}</div> : ''}
    </Link>
  )
}
