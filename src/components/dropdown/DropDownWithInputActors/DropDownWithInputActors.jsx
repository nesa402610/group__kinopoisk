import { NavLink } from 'react-router-dom'
import style from '../Dropdown.module.css'

export function DropDownWithInputActors({ actors }) {
  if (actors.length === 0) return <p className={style.title}>Простите, из звезд ничего не найдено</p>
  return (
    <>
      <p className={style.title}>Актеры, режиссеры и т.д.</p>
      {actors?.slice(0, 5).map((film) => (
        <div key={film.filmId} className={style.styles_mainLink}>

          <div className={style.styles_root}>

            <div className={style.styles_mainContainer}>
              <NavLink class={style.styles_mainLink} href=""><span /></NavLink>

              <div className={style.styles_imgContainer}>
                <img className={style.styles_img} alt={film.nameRu} src={film.posterUrl} />
              </div>
              <div className={style.styles_info}>
                <h4 className={style.styles_4}>
                  {film.nameRu}
                  {' '}
                </h4>

              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
