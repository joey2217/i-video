import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Radio } from 'antd'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import { MOVIE_TYPES as TYPES } from '../utils/constants'
import VideoList from '../components/VideoList'

const Movie: React.FC = () => {
  const { query } = useRouter()
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [type, setType] = useState(query.t as string || TYPES[0].value)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchList({ type, page, size: 24 })
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
  }, [page, type])

  return (
    <section className="page">
      <Head>
        <title>电影 - 视频资源网</title>
      </Head>
      <div>
        <div className="text-center pb-4">
          <Radio.Group
            optionType="button"
            options={TYPES}
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <VideoList
          loading={loading}
          videoList={videoList}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </section>
  )
}

export default memo(Movie)
