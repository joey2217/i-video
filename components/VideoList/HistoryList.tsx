import { Empty } from 'antd'
import React, { memo } from 'react'
import { useHistory } from '../../context/HistoryContext'
import VideoCard from './VideoCard'

interface Props {
  count?: number
}

const HistoryList: React.FC<Props> = ({ count }) => {
  const { histories,deleteHistory } = useHistory()
  if (histories.length > 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {count == null
          ? histories
              .slice(0, count)
              .map((video) => (
                <VideoCard key={video.vod_id} video={video} isHistory showDelete onDelete={deleteHistory}/>
              ))
          : histories.map((video) => (
              <VideoCard key={video.vod_id} video={video} isHistory showDelete  onDelete={deleteHistory}/>
            ))}
      </div>
    )
  }
  return <Empty />
}

export default memo(HistoryList)
