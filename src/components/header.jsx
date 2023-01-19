import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function Header() {
  const {isAuth, id} = useSelector(state => state.user)
  return (
    <header className={'bg-neutral-800'}>
      <div className={'flex justify-between  mx-8 py-4'}>
        <div className={'gap-4 flex'}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/films'}>Фильмы</Link>
          <Link to={'/about'}>О проекте</Link>
        </div>
        {!isAuth ?
          <div className={'gap-4 flex'}>
          <Link to={'/signup'}>Регистрация</Link>
          <Link to={'/signin'}>Вход</Link>
        </div>
          :
          <div>Профиль {id}</div>
        }
      </div>
    </header>
  );
}