import { Outlet } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Header } from './components/header'
import { store } from './store/store'
import { signIn } from './store/slices/userSlice'
import React from 'react'

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // @ts-ignore
    const ls = JSON.parse(localStorage.getItem('user'))
    if (ls) {
      dispatch(signIn(ls.name))
    }
  }, [dispatch])
  return (
    <Provider store={store}>
      <Header />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </Provider>
  )
}
