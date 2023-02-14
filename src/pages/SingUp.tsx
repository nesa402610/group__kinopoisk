import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export function SingUp() {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const nav = useNavigate()

  const singUnHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    axios.post('https://kinopoisk.na4u.ru/api/user', { name, password })
      .then(() => nav('/signIn'))
  }
  return (
    <div className="flex justify-center h-screen items-center">
      <form action="" className="flex min-w-[300px] flex-col bg-neutral-700 p-4 gap-4 rounded-lg">
        <h1 className="text-center text-lg">Регистрация</h1>
        <div className="flex flex-col">
          <span>Имя аккаунта</span>
          <input type="text" className="px-2 py-1 rounded-lg bg-neutral-800" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <span>Пароль</span>
          <input
            type="text"
            className="px-2 py-1 rounded-lg bg-neutral-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/signIn" className="text-sm text-right mr-1">Войти в аккаунт</Link>
        <button onClick={(e) => singUnHandler(e)} className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-900" type="submit">
          Создать аккаунт
        </button>
      </form>
    </div>
  )
}
