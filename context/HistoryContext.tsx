import React, { useCallback, useContext, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { History } from '../types'

interface HistoryProps {
  histories: History[]
  addHistory: (history: History) => void
}

const HistoryContext = React.createContext<HistoryProps>({
  histories: [],
  addHistory: () => {},
})

export function useHistory() {
  return React.useContext(HistoryContext)
}

const MAX_HISTORY_NUM = 120
const LOCAL_HISTORY = 'local_history'

export const HistoryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [histories, setHistories] = useState<History[]>([])
  const addHistory = useCallback((h: History) => {
    setHistories((list) =>
      [h, ...list.filter((s) => s.vod_id !== h.vod_id)].slice(
        0,
        MAX_HISTORY_NUM
      )
    )
  }, [])

  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_HISTORY)
    if (localData) {
      try {
        const localHistories = JSON.parse(localData)
        setHistories(localHistories)
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_HISTORY, JSON.stringify(histories))
  }, [histories])

  return (
    <HistoryContext.Provider
      value={{
        histories,
        addHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}
