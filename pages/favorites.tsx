import React, { memo, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { Empty } from 'antd'
import FavoritesContext from '../context/FavoritesContext'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'

const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext)
  const [videoList, setVideoList] = useState<Video[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (favorites.length > 0) {
      setLoading(true)
      fetchList({ ids: favorites.join() })
        .then((data) => {
          const { list } = data
          setVideoList(list)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [favorites])
  return (
    <section className="page">
      <Head>
        <title>收藏 - 视频资源网</title>
      </Head>
      <div>
        {favorites.length > 0 ? (
          <VideoList
            loading={loading}
            videoList={videoList}
            pagination={false}
          />
        ) : (
          <Empty />
        )}
      </div>
    </section>
  )
}

export default memo(Favorites)
