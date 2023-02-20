import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './filmCard.module.scss'



export function FilmCard({
  name, year, rating, img, id, genres,
}:{name: string, year: number, rating: number, img: string, id: number, genres: Array<{genre:string}>}) {
  const [likedState, setLikedState] = useState(false)
  // const dispatch = useAppDispatch()
  // const favouriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
  //   e.preventDefault()
  //   const favFilms = localStorage.getItem('favFilms')
  //   if (favFilms) {
  //     const parsed = JSON.parse(favFilms)
  //     if (parsed.includes(id)) {
  //       const removed = parsed.filter((film: number) => film !== id)

  //       if (removed.length === 0) {
  //         localStorage.removeItem('favFilms')
  //       } else localStorage.setItem('favFilms', JSON.stringify(removed))

  //     } else {
  //       const added = [...parsed, id]
  //       localStorage.setItem('favFilms', JSON.stringify(added))
  //     }
  //     dispatch(setFavouriteFilms(parsed))
  //   } else {
  //     localStorage.setItem('favFilms', JSON.stringify([id]))
  //   }
  //   dispatch(setFavouriteFilms())
  // };

  return (
    <Link to={`/film/${id}`} className={`max-w-sm rounded-xl overflow-hidden shadow-lg bg-black m-2 cursor-pointer relative ${s.card}`} style={({ width: '300px', height: '400px' })}>
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className={`px-6 py-4 absolute w-full bottom-0 left-0 bg-black ${s.cardText}`}>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-400 text-base">
          ID:
          {' '}
          {id}
        </p>
        <p className="text-gray-400 text-base">
          Год:
          {' '}
          {year}
        </p>
        <p className="text-gray-400 text-base">
          Рейтинг:
          {' '}
          {rating}
        </p>
        <div>
          {genres.map((genre) => <span key={genre.genre} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre.genre}</span>)}
        </div>
      </div>

      <button
        type="button"
        className="text-white absolute top-3 right-3 text-3xl"
        onClick={() => {
          setLikedState(!likedState)

        }}
      >
        <i className={`${likedState ? 'fa-solid' : 'fa-regular'} fa-heart`} />
      </button>
      <div className={`${s.rating} ${rating > 8 ? s.gold : s.gray}`}>{rating}</div>
    </Link>
  )
}
