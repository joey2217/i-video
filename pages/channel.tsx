import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import { Input } from 'antd'
import { fetchList } from '../utils/api'
import VideoList from '../components/VideoList'
import type { Video } from '../types'

const Channel: React.FC = () => {
  const router = useRouter()
  const { channel } = router.query

  const [channelName, setChannelName] = useState('全部')
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSearch = (val: string) => {
    setKeyword(val)
  }

  useEffect(() => {
    if (channel) {
      setLoading(true)
      fetchList({ type: channel as string, keyword, page, size: 24 })
        .then((data) => {
          console.log(data)
          const { typeName, list, total } = data
          setChannelName(typeName)
          setVideoList(list)
          setTotal(total)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [channel, keyword, page])

  return (
    <section className="page">
      <Head>
        <title>{channelName}频道 - 视频资源网</title>
      </Head>
      <div className="text-center">
        <Input.Search
          className="w-full md:w-1/2 lg:1/3"
          placeholder="输入关键词"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className="py-2 text-base font-bold">当前频道 : {channelName}</div>
      <div>
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

export default memo(Channel)
