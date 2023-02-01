import React, { memo } from 'react'
import { Pagination } from 'antd'
import VideoCard from './VideoCard'
import LoadingCard from './LoadingCard'
import type { Video } from '../../types'

interface Props {
  loading?: boolean
  count?: number
  videoList: Video[]
  pagination?: boolean
  total?: number
  onPageChange?: (page: number) => void
}

const VideoList: React.FC<Props> = ({
  loading,
  count = 24,
  videoList,
  total = 0,
  pagination = true,
  onPageChange,
}) => {
  return (
    <div>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 ${
          count === 8 ? 'lg:grid-cols-8' : 'lg:grid-cols-6 xl:grid-cols-8'
        } gap-2`}
      >
        {loading
          ? Array.from({ length: count }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          : videoList.map((video) => (
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
            showTotal={(total) => `共${total}`}
          />
        </div>
      )}
    </div>
  )
}

export default memo(VideoList)
