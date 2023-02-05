import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'

const Variety: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchList({ type: 27, page, size: 24 })
      .then((data) => {
        console.log(data)
        const { list, total } = data
        setVideoList(list)
        setTotal(total)
      })
      .finally(() => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
        setLoading(false)
      })
  }, [page])

  return (
    <section className="page">
      <Head>
        <title>综艺 - 视频资源网</title>
      </Head>
      <div>
        <VideoList
          loading={loading}
          videoList={videoList}
          page={page}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </section>
  )
}

export default memo(Variety)
