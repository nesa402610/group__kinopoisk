import { useEffect, useState } from 'react'

export const useDebounce = (value: string, ms: number) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, ms)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [ms, value])

  return debounceValue
}
