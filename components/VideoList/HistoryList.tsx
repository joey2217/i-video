import React, { memo } from 'react'
import { useHistory } from '../../context/HistoryContext'
import VideoCard from './VideoCard'

interface Props {
  count?: number
}

const HistoryList: React.FC<Props> = ({ count }) => {
  const { histories } = useHistory()
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-8 gap-2">
      {count == null
        ? histories
            .slice(0, count)
            .map((video) => (
              <VideoCard key={video.vod_id} video={video} isHistory />
            ))
        : histories.map((video) => (
            <VideoCard key={video.vod_id} video={video} isHistory />
          ))}
    </div>
  )
}

export default memo(HistoryList)
