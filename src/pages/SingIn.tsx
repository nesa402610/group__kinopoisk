import { MouseEvent, useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {signIn} from '../store/slices/userSlice'
import React from 'react'

export function SingIn() {
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [errors, setErrors] = useState<string>('')

  const dispatch = useDispatch()
  const nav = useNavigate()

  const singInHandler = (e: any) => {
    e.preventDefault()
    axios.post('https://kinopoisk.na4u.ru/api/auth', { name, password })
      .then((r) => {
        if (r.data === 'INVALID LOGIN OR PASSWORD') {
          setErrors('Неверные логин или пароль')
        } else {
          setErrors('')
          dispatch(signIn(r.data.name))
          localStorage.setItem('user', JSON.stringify({ token: r.data.token, name: r.data.name }))
          nav('/')
        }
      })
  }
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="flex flex-col min-w-[300px] bg-neutral-700 p-4 gap-4 rounded-lg">
        <h1 className="text-center text-lg">Авторизация</h1>
        {errors && <span className="text-red-500">{errors}</span>}
        <div className="flex flex-col">
          <span>Имя аккаунта</span>
          <input
            type="text"
            className="px-2 py-1 rounded-lg bg-neutral-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <span>Пароль</span>
          <input
            type="password"
            className="px-2 py-1 rounded-lg bg-neutral-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/signUp" className="text-sm text-right mr-1">Создать аккаунт</Link>
        <button
          onClick={(e) => singInHandler(e)}
          className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-900"
          type="submit"
        >
          Войти в аккаунт
        </button>
      </form>
    </div>
  )
}
