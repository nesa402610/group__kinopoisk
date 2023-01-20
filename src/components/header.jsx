import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/slices/filmsSlice";

export function Header() {
  const {isAuth, id} = useSelector(state => state.user);
  const {search} = useSelector(state => state.films);
  const dispatch = useDispatch();
  return (
    <header className={'bg-neutral-800'}>
      <div className={'flex justify-between gap-8 mx-8 py-4'}>
        <div className={'gap-4 flex items-center'}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/films'}>Фильмы</Link>
          <Link to={'/about'}>О проекте</Link>
        </div>
        <div className={'flex-1'}>
          <input type="text"
                 className={'w-full py-2 px-4 bg-neutral-700 outline-0'}
                 value={search}
                 onChange={e => dispatch(setSearch(e.target.value))}/>
        </div>
        <div className={'gap-4 flex items-center'}>
          {!isAuth ?
            <>
              <Link to={'/signup'}>Регистрация</Link>
              <Link to={'/signin'}>Вход</Link>
            </>
            :
            <div>Профиль {id}</div>
          }
        </div>
      </div>
    </header>
  );
}
