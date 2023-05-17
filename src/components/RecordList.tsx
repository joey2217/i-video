'use client'

import { useVideoRecord } from '@/context/VideoRecordContext'
import React, { memo, useMemo } from 'react'
import VideoRecordCard from './VideoRecordCard'

interface Props {
  count?: number
}

const RecordList: React.FC<Props> = ({ count }) => {
  const { records } = useVideoRecord()

  const list = useMemo(() => {
    if (count) {
      return records.slice(0, count)
    }
    return records
  }, [count, records])

  if (list.length === 0) {
    return <div className="text-center">暂无数据</div>
  }

  return (
    <div className="grid gap-1 md:gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {list.map((r) => (
        <VideoRecordCard key={r.vod_id} video={r} />
      ))}
    </div>
  )
}

export default memo(RecordList)
