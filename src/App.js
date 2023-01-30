import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/header'
import { signIn } from './store/slices/userSlice'

const queryClient = new QueryClient()

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const ls = localStorage.getItem('id')
    if (ls) {
      dispatch(signIn(ls))
    }
  }, [dispatch])
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}
