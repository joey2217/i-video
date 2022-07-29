import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Input, List, Skeleton, TreeSelect } from 'antd'
import { fetchList } from '../utils/api'
import type { Video } from '../types'
import { CHANNEL_DATA } from '../utils/constants'
import SearchItem from '../components/SearchItem'

const Search: React.FC = () => {
  const router = useRouter()
  const { q } = router.query
  const [channel, setChannel] = useState('')
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSearch = (val: string) => {
    setKeyword(val)
  }

  useEffect(() => {
    setLoading(true)
    fetchList({ type: channel as string, keyword, page, size: 10 })
      .then((data) => {
        console.log(data)
        const { list, total } = data
        setVideoList(list)
        setTotal(total)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [channel, keyword, page])

  useEffect(() => {
    if (q) {
      setKeyword(q as string)
    }
  }, [q])

  return (
    <section className="page">
      <Head>
        <title>搜索 - 视频资源网</title>
      </Head>
      <div className="text-center">
        <Input.Search
          addonBefore={
            <TreeSelect
              className="w-32"
              value={channel}
              treeData={CHANNEL_DATA}
              placeholder="Please select"
              treeDefaultExpandAll
              onChange={setChannel}
            />
          }
          className="w-full md:w-1/2 lg:1/3"
          placeholder="输入关键词"
          defaultValue={q}
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div>
        <List
          itemLayout="vertical"
          dataSource={videoList}
          pagination={{
            total,
            size: 'small',
            pageSize: 10,
            onChange: setPage,
          }}
          renderItem={(item) => (
            <List.Item key={item.vod_id}>
              <Skeleton loading={loading} active>
                <Link href={`/v/${item.vod_id}`}>
                  <a className="text-white hover:text-white">
                    <SearchItem {...item} />
                  </a>
                </Link>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </section>
  )
}

export default memo(Search)
