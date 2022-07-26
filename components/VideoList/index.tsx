import React, { memo } from 'react'
import VideoCard from './VideoCard'
import LoadingCard from './LoadingCard'
import type { Video } from '../../types'
import { Pagination } from 'antd'

interface Props {
  loading?: boolean
  count?: number
  videoList: Video[]
  pagination?: boolean
  total?: number
  onPageChange?: (page: number) => void
}

// loading
const VideoList: React.FC<Props> = ({
  loading,
  count = 24,
  videoList,
  total = 0,
  pagination = true,
  onPageChange,
}) => {
  if (loading) {
    return (
      <div
        className={`grid grid-cols-2 md:grid-cols-4 ${
          count === 8 ? 'lg:grid-cols-8' : 'lg:grid-cols-6 xl:grid-cols-8'
        } gap-2`}
      >
        {Array.from({ length: count }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    )
  }
  return (
    <div>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 ${
          count === 8 ? 'lg:grid-cols-8' : 'lg:grid-cols-6 xl:grid-cols-8'
        } gap-2`}
      >
        {videoList.map((video) => (
          <VideoCard key={video.vod_id} video={video} />
        ))}
      </div>
      {pagination && (
        <div className="p-4 text-center">
          <Pagination
            size="small"
            onChange={onPageChange}
            total={total}
            showSizeChanger={false}
            showTotal={(total) => `共 ${total} 资源`}
          />
        </div>
      )}
    </div>
  )
}

export default memo(VideoList)
