'use client'

import React, { memo, useCallback } from 'react'
import Player from '../Player'
import type { Video } from '@/types'
import { useVideoRecord } from '@/context/VideoRecordContext'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  liveUrl: string
  video: Video
  nextUrl?: string
}

const VideoPlayer: React.FC<Props> = ({ liveUrl, video, nextUrl }) => {
  const { records, updateVideoRecord } = useVideoRecord()
  const pathname = usePathname()
  const router = useRouter()

  let current = records.find((r) => r.path === pathname)
  if (current == null) {
    current = { ...video, path: pathname, seek: 0, date: Date.now() }
    updateVideoRecord(current)
  }

  const onTimeUpdate = useCallback(
    (seek: number) => {
      updateVideoRecord({ ...current!, seek })
    },
    [current, updateVideoRecord]
  )

  const onEnd = useCallback(() => {
    if (nextUrl) {
      router.push(nextUrl)
    }
  }, [nextUrl, router])

  return (
    <div>
      <Player
        liveUrl={liveUrl}
        seek={current.seek}
        onTimeUpdate={onTimeUpdate}
        onEnd={onEnd}
      />
    </div>
  )
}

export default memo(VideoPlayer)
