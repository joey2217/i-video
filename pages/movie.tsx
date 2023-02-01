import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { Video } from '../types'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'
import { Radio } from 'antd'

const TYPES = [
  {
    label: '剧情片',
    value: '14',
  },
  {
    label: '动作片',
    value: '9',
  },
  {
    label: '科幻片',
    value: '12',
  },
  {
    label: '喜剧片',
    value: '11',
  },
  {
    label: '战争片',
    value: '15',
  },
  {
    label: '恐怖片',
    value: '13',
  },
  {
    label: '爱情片',
    value: '10',
  },
  {
    label: '纪录片',
    value: '16',
  },
  {
    label: '动画片',
    value: '23',
  },
]

const Movie: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [type, setType] = useState(TYPES[0].value)
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
