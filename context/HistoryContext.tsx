import React, { useCallback, useEffect, useState } from 'react'
import { fetchList } from '../utils/api'
import type { PropsWithChildren } from 'react'
import type { IHistory } from '../types'

interface HistoryProps {
  histories: IHistory[]
  addHistory: (history: IHistory) => void
  deleteHistory: (id: number) => void
}

const HistoryContext = React.createContext<HistoryProps>({
  histories: [],
  addHistory: () => {},
  deleteHistory: () => {},
})

export function useHistory() {
  return React.useContext(HistoryContext)
}

const MAX_HISTORY_NUM = 120
const LOCAL_HISTORY = 'local_history'

export const HistoryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [histories, setHistories] = useState<IHistory[]>([])
  const addHistory = useCallback((h: IHistory) => {
    // console.log('addHistory', h)
    setHistories((list) =>
      [h, ...list.filter((s) => s.vod_id !== h.vod_id)].slice(
        0,
        MAX_HISTORY_NUM
      )
    )
  }, [])

  const deleteHistory = useCallback((id: number) => {
    // console.log('addHistory', h)
    setHistories((list) => list.filter((h) => h.vod_id !== id))
  }, [])

  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_HISTORY)
    if (localData) {
      try {
        const localHistories = JSON.parse(localData) as any[]
        if (localHistories.length > 0) {
          const ids = localHistories.map((v: { vod_id: any }) => v.vod_id)
          const map = new Map()
          localHistories.forEach((item) => {
            map.set(item.vod_id, item)
          })
          fetchList({ ids: ids.join() }).then((data) => {
            const { list } = data
            const his = list.map((video, index) => ({
              ...map.get(video.vod_id),
              vod_id: video.vod_id,
              vod_pic: video.vod_pic,
              vod_name: video.vod_name,
              vod_douban_score: video.vod_douban_score,
              vod_time: video.vod_time,
              vod_tag: video.vod_tag,
              vod_remarks: video.vod_remarks,
            }))
            console.log(list, 'LOCAL_HISTORY', localHistories, his)
            setHistories(his)
          })
        }
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  useEffect(() => {
    if (histories.length > 0) {
      localStorage.setItem(LOCAL_HISTORY, JSON.stringify(histories))
    }
  }, [histories])

  return (
    <HistoryContext.Provider
      value={{
        histories,
        addHistory,
        deleteHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}
