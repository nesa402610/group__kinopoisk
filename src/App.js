import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { Header } from './components/header'
import { signIn } from './store/slices/userSlice'
import { store } from './store/store'

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const ls = localStorage.getItem('id')
    if (ls) {
      dispatch(signIn(ls))
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
