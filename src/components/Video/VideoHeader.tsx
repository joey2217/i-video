'use client'

import React, { memo, useMemo } from 'react'
import { ChevronLeft, HeartIcon } from '../Icons'
import { useRouter } from 'next/navigation'
import { useLikeVideo } from '@/context/LikeVideoContext'
import type { Video } from '@/types'

interface Props {
  title?: string
  video: Video
}

const VideoHeader: React.FC<Props> = ({ title = 'TITLE', video }) => {
  const router = useRouter()
  const { likeIds, toggleLike } = useLikeVideo()
  const like = useMemo(
    () => likeIds.includes(video.vod_id),
    [likeIds, video.vod_id]
  )
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => router.back()}
        className="w-16 flex items-center gap-1 text-lg hover:text-indigo-600"
      >
        <ChevronLeft />
        <span>返回</span>
      </button>
      <div className="flex-1 text-center text-lg font-semibold">{title}</div>
      <div className="w-16 h-5">
        <button
          onClick={() => toggleLike(video)}
          className="text-2xl"
          title={like ? '取消喜欢' : '喜欢'}
        >
          <HeartIcon className={like ? 'text-rose-500' : ''} />
        </button>
      </div>
    </div>
  )
}

export default memo(VideoHeader)
