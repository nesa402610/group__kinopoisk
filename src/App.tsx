import {Outlet} from 'react-router-dom'
import React, {useEffect} from 'react'
import {Header} from './components/header'
import {useAppDispatch} from './store/store'
import {signIn} from './store/slices/userSlice'

export function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const ls = localStorage.getItem('user')
    if (ls) {
      const parsed = JSON.parse(ls)
      dispatch(signIn(parsed.name))
    }
  }, [dispatch])
  return (
    <>
      <Header/>
      <div className="flex justify-center">
        <Outlet/>
      </div>
    </>
  )
}
