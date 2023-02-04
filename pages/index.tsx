import { Card, Divider, Empty, Skeleton, Space } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BannerSwiper from '../components/BannerSwiper'
import VideoList from '../components/VideoList'
import HistoryList from '../components/VideoList/HistoryList'
import type { LatestData } from '../types'
import { fetchLatestList } from '../utils/api'
import { HOT, MOVIE_TYPES, TV_TYPES, CARTOON_TYPES } from '../utils/constants'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [latestData, setLatestData] = useState<LatestData>()
  useEffect(() => {
    setLoading(true)
    fetchLatestList()
      .then((data) => {
        setLatestData(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <section>
      <Head>
        <title>首页 - 视频资源网</title>
      </Head>
      <BannerSwiper bannerData={HOT} />
      <div className="page">
        <Card
          bodyStyle={{
            padding: '16px 0',
          }}
          title={
            <div className="flex items-baseline">
              <Link href="/record">
                <a className="text-lg font-bold mr-4">看过</a>
              </Link>
            </div>
          }
          bordered={false}
          className="mb-2 md:mb-4"
        >
          <HistoryList count={8} />
        </Card>
        <Skeleton loading={loading} active>
          {latestData ? (
            <div>
              <Card
                bodyStyle={{
                  padding: '16px 0',
                }}
                title={
                  <div className="flex items-baseline">
                    <Link href="/movie">
                      <a className="text-lg font-bold mr-4">电影</a>
                    </Link>
                    <Space
                      split={<Divider type="vertical" />}
                      wrap
                      className="text-xs ml-1 md:ml-2 lg:ml-4"
                    >
                      {MOVIE_TYPES.map((type) => (
                        <Link key={type.value} href={`/movie?t=${type.value}`}>
                          <a className="text-white hover:text-green-400">
                            {type.label}
                          </a>
                        </Link>
                      ))}
                    </Space>
                  </div>
                }
                bordered={false}
                className="mb-2 md:mb-4"
              >
                <VideoList
                  count={8}
                  videoList={latestData.movieList}
                  pagination={false}
                />
              </Card>
              <Card
                bodyStyle={{
                  padding: '16px 0',
                }}
                title={
                  <div className="flex items-baseline">
                    <Link href="/tv">
                      <a className="text-lg font-bold mr-4">电视剧</a>
                    </Link>

                    <Space
                      split={<Divider type="vertical" />}
                      wrap
                      className="text-xs ml-1 md:ml-2 lg:ml-4"
                    >
                      {TV_TYPES.map((type) => (
                        <Link key={type.value} href={`/tv?t=${type.value}`}>
                          <a className="text-white hover:text-green-400">
                            {type.label}
                          </a>
                        </Link>
                      ))}
                    </Space>
                  </div>
                }
                bordered={false}
                className="mb-2 md:mb-4"
              >
                <VideoList
                  count={8}
                  videoList={latestData.tvList}
                  pagination={false}
                />
              </Card>
              <Card
                bodyStyle={{
                  padding: '16px 0',
                }}
                title={
                  <div className="flex items-baseline">
                    <Link href="/variety">
                      <a className="text-lg font-bold mr-4">综艺</a>
                    </Link>
                  </div>
                }
                bordered={false}
                className="mb-2 md:mb-4"
              >
                <VideoList
                  count={8}
                  videoList={latestData.varietyList}
                  pagination={false}
                />
              </Card>
              <Card
                bodyStyle={{
                  padding: '16px 0',
                }}
                title={
                  <div className="flex items-baseline">
                    <Link href="/cartoon">
                      <a className="text-lg font-bold mr-4">动漫</a>
                    </Link>
                    <Space
                      split={<Divider type="vertical" />}
                      wrap
                      className="text-xs ml-1 md:ml-2 lg:ml-4"
                    >
                      {CARTOON_TYPES.map((type) => (
                        <Link
                          key={type.value}
                          href={`/cartoon?t=${type.value}`}
                        >
                          <a className="text-white hover:text-green-400">
                            {type.label}
                          </a>
                        </Link>
                      ))}
                    </Space>
                  </div>
                }
                bordered={false}
                className="mb-2 md:mb-4"
              >
                <VideoList
                  count={8}
                  videoList={latestData.cartoonList}
                  pagination={false}
                />
              </Card>
            </div>
          ) : (
            <Empty />
          )}
        </Skeleton>
      </div>
    </section>
  )
}

export default Home
