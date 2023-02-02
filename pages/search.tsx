import React, { memo, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { GetServerSideProps } from 'next'
import { Input, List, Skeleton, TreeSelect, Cascader } from 'antd'
import { fetchList } from '../utils/api'
import type { Video } from '../types'
import { CHANNEL_DATA, DEFALUT_VIDEO } from '../utils/constants'
import SearchItem from '../components/SearchItem'

const Search: React.FC<{ q: string }> = ({ q = '' }) => {
  const [channel, setChannel] = useState('')
  const [videoList, setVideoList] = useState<Video[]>([DEFALUT_VIDEO])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const onSearch = (val: string) => {
    setKeyword(val)
  }

  useEffect(() => {
    if (keyword == undefined) {
      return
    }
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
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      })
  }, [channel, keyword, page])

  useEffect(() => {
    setKeyword(q as string)
  }, [q])

  return (
    <section className="page">
      <Head>
        <title>搜索 - 视频资源网</title>
      </Head>
      <div className="text-center">
        <Input.Search
          addonBefore={
            <Cascader
              className="w-36"
              defaultValue={['']}
              options={CHANNEL_DATA}
              placeholder="分类"
              onChange={(val) =>
                val ? setChannel(val[val.length - 1] as string) : ''
              }
            />
          }
          className="w-full md:w-1/2 lg:1/3"
          placeholder="输入关键词"
          defaultValue={q}
          allowClear
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
            showSizeChanger: false,
            showTotal: (total) => `共${total}`,
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      q: context.query.q || '',
    },
  }
}
