'use client'

import React, { useCallback, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { VideoRecord } from '@/types'
import useLocalStorage from '@/hooks/useLocalStorage'

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

const MAX_VIDEO_RECORD_COUNT = 120

export const VideoRecordProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [records, setRecords] = useLocalStorage<VideoRecord[]>(
    'video_record',
    []
  )

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
