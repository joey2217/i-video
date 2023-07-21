'use client'

import React, { useCallback, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { VideoRecord, VideoResponse } from '@/types'

interface VideoRecordProps {
  records: VideoRecord[]
  updateVideoRecord: (r: VideoRecord) => void
  removeVideoRecord: (r: VideoRecord) => void
}

const VideoRecordContext = React.createContext<VideoRecordProps>({
  records: [],
  updateVideoRecord: () => {},
  removeVideoRecord: () => {},
})

export function useVideoRecord() {
  return React.useContext(VideoRecordContext)
}

const MAX_VIDEO_RECORD_COUNT = 24
const VIDEO_STORAGE_KEY = 'video_record'

export const VideoRecordProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [records, setRecords] = useState<VideoRecord[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem(VIDEO_STORAGE_KEY)
      if (localData) {
        try {
          const data = JSON.parse(localData) as VideoRecord[]
          setRecords(data)
          const ids = data.map((v) => v.vod_id)
          if (ids.length > 0) {
            fetch(`/api/video_list?ac=detail&ids=${ids}`)
              .then((res) => res.json() as Promise<VideoResponse>)
              .then((res) => {
                res.list.sort(
                  (a, b) => ids.indexOf(a.vod_id) - ids.indexOf(b.vod_id)
                )
                return res.list
              })
              .then((list) => {
                if (list.length > 0) {
                  const recordData = list.map((item, index) => {
                    console.log(item.vod_id === data[index].vod_id)
                    return {
                      ...item,
                      path: data[index].path,
                      seek: data[index].seek,
                    }
                  })
                  setRecords(recordData)
                }
              })
              .catch(console.error)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(records))
  }, [records])

  const updateVideoRecord = useCallback(
    (v: VideoRecord) => {
      setRecords((list) => {
        const r = { ...v, vod_play_url: '', vod_content: '', vod_actor: '' }
        const index = list.findIndex((item) => item.vod_id === r.vod_id)
        if (index === -1) {
          return [r, ...list].slice(0, MAX_VIDEO_RECORD_COUNT)
        } else {
          return [...list.slice(0, index), r, ...list.slice(index + 1)]
        }
      })
    },
    [setRecords]
  )

  const removeVideoRecord = useCallback(
    (r: VideoRecord) => {
      setRecords((list) => list.filter((item) => item.vod_id !== r.vod_id))
    },
    [setRecords]
  )

  return (
    <VideoRecordContext.Provider
      value={{
        records,
        updateVideoRecord,
        removeVideoRecord,
      }}
    >
      {children}
    </VideoRecordContext.Provider>
  )
}
