import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem(key)
      if (localData) {
        try {
          const data = JSON.parse(localData)
          setValue(data)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
