import {useState} from "react";
import axios from "axios";

export function SingUp() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const singUnHandler = (e) => {
    e.preventDefault();
    axios.post('https://kinopoisk.na4u.ru/api/user', {name, password});
  };
  return (
    <div className={'flex justify-center h-screen items-center'}>
      <form action="" className={'flex flex-col bg-neutral-700 p-4 gap-4'}>
        <div className={'flex flex-col'}>
          <span>Name</span>
          <input type="text" className={'text-black px-2'} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={'flex flex-col'}>
          <span>Пароль</span>
          <input type="text"
                 className={'text-black px-2'}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={e => singUnHandler(e)} className={'bg-neutral-800 p-2'} type={"submit"}>Создать аккаунт
        </button>
      </form>
    </div>
  );
}