import React from 'react'
import { Link } from 'react-router-dom'
import { FilmTop } from '../../../types/types'
import style from '../Dropdown.module.scss'

export function DropDownNoInpyt({ films }: {films:FilmTop[]}) {
  console.log(style)
  return (
    <>
      {films!.slice(0, 10).map((film) => (
        <div key={film.filmId} className={style.styles_mainLink}>
          <Link to={`/film/${film.filmId}`} >
          <div className={style.styles_root}>
            <div className={style.styles_mainContainer}>
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
                    {film.genres?.map((genre) => (
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
