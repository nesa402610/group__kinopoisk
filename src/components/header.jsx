import {Link} from "react-router-dom";

export function Header() {
  return (
    <header className={'bg-neutral-800'}>
      <div className={'flex justify-between  mx-8 py-4'}>
       <div className={'gap-4 flex'}>
         <Link to={'/'}>Главная</Link>
         <Link to={'/'}>Поиск</Link>
         <Link to={'/'}>Фильмы</Link>
         <Link to={'/'}>О проекте</Link>
       </div>
        <div className={'gap-4 flex'}>
         <Link to={'/signup'}>Регистрация</Link>
         <Link to={'/signin'}>Вход</Link>
        </div>
      </div>
    </header>
  );
}