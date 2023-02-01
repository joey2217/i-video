import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'
import { Radio } from 'antd'

const TYPES = [
  {
    label: '国漫',
    value: '24',
  },
  {
    label: '日漫',
    value: '25',
  },
  {
    label: '欧美',
    value: '26',
  },
]

const Cartoon: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState(TYPES[0].value)

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
        <title>动漫 - 视频资源网</title>
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

export default memo(Cartoon)
