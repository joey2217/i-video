import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Skeleton, Empty, Segmented } from 'antd'
import Player from '../../components/Player'
import { fetchVideo } from '../../api'
import { Video } from '../../types'
import Info from './Info'
import PlayList from './PlayList'

const Detail: React.FC = () => {
  const { id } = useParams()
  const [video, setVideo] = useState<Video | undefined>()
  const [loading, setLoading] = useState(false)
  const [playUrl, setPlayUrl] = useState('')
  const [tab, setTab] = useState('play')

  useEffect(() => {
    if (id) {
      setLoading(true)
      const vid = Number(id)
      fetchVideo(vid)
        .then((v) => {
          setVideo(v)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <Skeleton active />
  }

  if (video) {
    return (
      <section>
        <div className="text-lg">{video.vod_name}</div>
        <div>
          <Player liveUrl={playUrl} />
        </div>
        <div>
          <div className="mb-4 mx-auto w-full md:w-2/3 lg:w-1/2 xl:1/4">
            <Segmented
              block
              defaultValue={tab}
              onChange={(val) => setTab(val as string)}
              options={[
                {
                  label: '播放列表',
                  value: 'play',
                },
                {
                  label: '剧情简介',
                  value: 'info',
                },
              ]}
            />
          </div>
          {tab === 'play' ? (
            <PlayList video={video} onUrlChange={(url) => setPlayUrl(url)} />
          ) : (
            <Info {...video} />
          )}
        </div>
      </section>
    )
  }

  return <Empty />
}

export default memo(Detail)
