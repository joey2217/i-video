import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import { Input } from 'antd'
import { fetchList } from '../api'
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

  const onSearch = (val: string) => {
    setKeyword(val)
  }

  useEffect(() => {
    if (channel) {
      fetchList({ type: channel as string, keyword, page, size: 24 }).then(
        (data) => {
          console.log(data)
          const { typeName, list, total } = data
          setChannelName(typeName)
          setVideoList(list)
          setTotal(total)
        }
      )
    }
  }, [channel, keyword, page])

  return (
    <section>
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <div>频道 {channelName}</div>
      <div>
        <VideoList videoList={videoList} total={total} onPageChange={setPage}/>
      </div>
    </section>
  )
}

export default memo(Channel)
