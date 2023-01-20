import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from './components/header'
import { signIn } from './store/slices/userSlice'

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const ls = localStorage.getItem('id')
    if (ls) {
      dispatch(signIn(ls))
    }
  }, [dispatch])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
