import {Link} from "react-router-dom";

export function Header() {
  return (
    <header>
      <div>
        <Link to={'/'}>Главная</Link>
        <Link to={'/'}>Поиск</Link>
        <Link to={'/'}>Фильмы</Link>
        <Link to={'/'}>О проекте</Link>
      </div>
    </header>
  );
}