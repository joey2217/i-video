'use client'

import { useLikeVideo } from '@/context/LikeVideoContext'
import React, { memo } from 'react'
import VideoCard from './VideoCard'

const LikeList: React.FC = () => {
  const { likes } = useLikeVideo()
  if (likes.length > 0) {
    return (
      <div className="grid gap-1 md:gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {likes.map((v) => (
          <VideoCard key={v.vod_id} video={v} />
        ))}
      </div>
    )
  }
  return <div className="text-center">暂无数据</div>
}

export default memo(LikeList)
