import React, { memo, useEffect, useState } from 'react'
import { Input, Select, List, Card, Pagination, Skeleton } from 'antd'
import { fetchCategory, fetchList } from '../../api'
import type { Category, Video } from '../../types'
import { Link } from 'react-router-dom'
import Description from '../../components/Description'
const { Option } = Select

const LOCAL_CATEGORY_ID = 'local_category_id'
const getLocalCategoryId = () => {
  const val = localStorage.getItem(LOCAL_CATEGORY_ID)
  if (val) {
    return Number(val)
  }
  return -1
}

const Home: React.FC = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<number>(getLocalCategoryId())
  const [categoryList, setCategoryList] = useState<Category[]>([])

  const onSearch = (keyword: string) => {
    setKeyword(keyword)
  }

  const onCategoryIdChange = (id: number) => {
    setCategory(id)
    localStorage.setItem(LOCAL_CATEGORY_ID, id.toString())
  }

  useEffect(() => {
    fetchCategory().then((data) => {
      setCategoryList(data)
      onCategoryIdChange(-1)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchList(page, keyword, category)
      .then((data) => {
        const { list, total } = data
        setTotal(total)
        setVideoList(list)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [category, keyword, page])

  return (
    <section>
      <div className="mb-4 mx-auto w-full md:w-2/3 lg:w-1/2">
        <Input.Search
          addonBefore={
            <Select
              className="w-32"
              value={category}
              onChange={onCategoryIdChange}
            >
              <Option value={-1}>全部</Option>
              {categoryList.map((c) => (
                <Option key={c.type_id} value={c.type_id}>
                  {c.type_name}
                </Option>
              ))}
            </Select>
          }
          placeholder="关键词"
          enterButton
          allowClear
          onSearch={onSearch}
        />
      </div>
      {loading
        ? <Skeleton active />
        : (
        <div>
          <List
            grid={{
              gutter: 8,
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 5,
              xxl: 5,
            }}
            dataSource={videoList}
            renderItem={(v) => (
              <List.Item>
                <Link to={`/v/${v.vod_id}`}>
                  <Card
                    hoverable
                    // cover={
                    //   <img
                    //     className="object-cover h-40 md:h-64 lg:h-80"
                    //     src={v.vod_pic}
                    //     alt={`${v.vod_name}封面`}
                    //   />
                    // }
                  >
                    <Description {...v} />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
          <div className="text-center">
            <Pagination onChange={(p) => setPage(p)} total={total} showSizeChanger={false} />
          </div>
        </div>
          )
      }
    </section>
  )
}

export default memo(Home)
