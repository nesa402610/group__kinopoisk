import React from 'react'
import { Link } from 'react-router-dom'
import s from './filmCardSmall.module.scss'

export function FilmCardSmall({
  name, year, rating, img, id
}: {name: string, year:string, rating:string, img: string,   id: number}) {
  return (
    <Link to={`/film/${id}`} className={s.container}>
      <img className="w-full" src={img} alt="" />
      <div className="absolute bottom-0 text-white text-base w-full bg-black bg-opacity-80 text-sm p-2">
        <p className="font-bold text-center m-1">{name}</p>
        <p>
          Год:
          {' '}
          {year}
        </p>
      </div>
      <div className={`${s.rating} ${+rating > 8 ? s.gold : s.gray}`}>{rating}</div>
    </Link>
  )
}
