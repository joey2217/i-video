import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'
import { Radio } from 'antd'

const TYPES = [
  {
    label: '内地剧',
    value: '20',
  },
  {
    label: '香港剧',
    value: '4',
  },
  {
    label: '台湾剧',
    value: '28',
  },
  {
    label: '欧美剧',
    value: '3',
  },
  {
    label: '韩剧',
    value: '5',
  },
  {
    label: '日剧',
    value: '6',
  },
  {
    label: '马泰剧',
    value: '7',
  },
]

const TvPage: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [type, setType] = useState(TYPES[0].value)
  const [page, setPage] = useState(1)
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
        <title>电视剧 - 视频资源网</title>
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

export default memo(TvPage)
