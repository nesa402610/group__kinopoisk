import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/slices/userSlice'

export function SingIn() {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const singInHandler = (e) => {
    e.preventDefault()
    axios.post('https://kinopoisk.na4u.ru/api/auth', { name, password })
      .then((r) => {
        localStorage.setItem('id', JSON.stringify(r.data.id))
        dispatch(signIn(r.data.id))
      })
  }
  return (
    <div className="flex justify-center h-screen items-center">
      <form action="" className="flex flex-col bg-neutral-700 p-4 gap-4">
        <div className="flex flex-col">
          <span>Name</span>
          <input type="text" className="text-black px-2" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <span>Пароль</span>
          <input
            type="text"
            className="text-black px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={(e) => singInHandler(e)} className="bg-neutral-800 p-2" type="submit">
          Войти в аккаунт
        </button>
      </form>
    </div>
  )
}
