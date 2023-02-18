import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Actor } from '../../../types/types'
import style from '../Dropdown.module.scss'

export function DropDownWithInputActors({ actors } : {actors : Actor[]}) {
  if (actors.length === 0) return <p className={style.title}>Простите, из звезд ничего не найдено</p>
  return (
    <>
      <p className={style.title}>Актеры, режиссеры и т.д.</p>
      {actors?.slice(0, 5).map((actor) => (
        <div key={actor.kinopoiskId} className={style.styles_mainLink}>
          <Link to={`/actor/${actor.kinopoiskId}`} >

          <div className={style.styles_root}>

            <div className={style.styles_mainContainer}>
              <NavLink className={style.styles_mainLink} to="/actor/"><span /></NavLink>

              <div className={style.styles_imgContainer}>
                <img className={style.styles_img} alt={actor.nameRu} src={actor.posterUrl} />
              </div>
              <div className={style.styles_info}>
                <h4 className={style.styles_4}>
                  {actor.nameRu}
                  {' '}
                </h4>

              </div>
            </div>
          </div>
          </Link>
        </div>
      
      ))}
    </>
  )
}
