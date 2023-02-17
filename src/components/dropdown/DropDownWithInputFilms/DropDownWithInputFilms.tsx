import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FilmCatalog } from '../../../types/types'
import style from '../Dropdown.module.scss'

export function DropDownWithInputFilms({ films } : {films: FilmCatalog[]}) {
  console.log(films)

  if (films.length === 0) return <p className={style.title}>Простите, из фильмов ничего не найдено</p>
  return (
    <>
      <p className={style.title}>Фильмы</p>
      {films?.slice(0, 5).map((film) => (
        <div key={film.kinopoiskId} className={style.styles_mainLink}>
           <Link to={`/film/${film.kinopoiskId}`} >
              <div className={style.styles_root}>

              <div className={style.styles_mainContainer}>
                <NavLink className={style.styles_mainLink} to=""><span /></NavLink>

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
                      <div className={style.styles_rootPositive}>{film.ratingKinopoisk}</div>
                    </div>
                    <span className={style.styles_subtitle4}>
                      {film.genres.map((genre) => (
                        <span key={genre.genre} className={style.styles_subtitle4}>
                          {genre.genre}
                          {' '}
                        </span>
                      ))}
                      {' '}
                      {film.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
           </Link>
          
        </div>
      ))}
    </>
  )
}
