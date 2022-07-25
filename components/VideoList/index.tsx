import React, { memo } from 'react'
import VideoCard from './VideoCard'
import type { Video } from '../../types'
import { Pagination } from 'antd'

interface Props {
  loading?: boolean
  videoList: Video[]
  total: number
  onPageChange: (page: number) => void
}

// loading
const VideoList: React.FC<Props> = ({
  loading,
  videoList,
  total,
  onPageChange,
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {videoList.map((video) => (
          <VideoCard key={video.vod_id} video={video} />
        ))}
      </div>
      <div className="p-4 text-center">
        <Pagination
          size="small"
          onChange={onPageChange}
          total={total}
          showSizeChanger={false}
          showTotal={(total) => `共 ${total} 资源`}
        />
      </div>
    </div>
  )
}

export default memo(VideoList)
