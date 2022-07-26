import { Card, Divider, Empty, Skeleton, Space } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BannerSwiper from '../components/BannerSwiper'
import VideoList from '../components/VideoList'
import type { LatestData } from '../types'
import { fetchLatestList } from '../utils/api'
import { HOT_CARTOON } from '../utils/constants'

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
      <BannerSwiper bannerData={HOT_CARTOON} />
      <div className="page">
        {loading ? (
          <Skeleton active />
        ) : latestData ? (
          <div>
            <Card
              title={
                <div className="flex items-baseline">
                  <div className="text-lg font-bold">最新电影</div>
                  <Space
                    split={<Divider type="vertical" />}
                    wrap
                    className="text-xs ml-1 md:ml-2 lg:ml-4"
                  >
                    <Link href="/channel?channel=14">
                      <a className="text-white hover:text-green-400">剧情片</a>
                    </Link>
                    <Link href="/channel?channel=9">
                      <a className="text-white hover:text-green-400">动作片</a>
                    </Link>
                    <Link href="/channel?channel=12">
                      <a className="text-white hover:text-green-400">科幻片</a>
                    </Link>
                    <Link href="/channel?channel=11">
                      <a className="text-white hover:text-green-400">喜剧片</a>
                    </Link>
                    <Link href="/channel?channel=15">
                      <a className="text-white hover:text-green-400">战争片</a>
                    </Link>
                    <Link href="/channel?channel=13">
                      <a className="text-white hover:text-green-400">恐怖片</a>
                    </Link>
                    <Link href="/channel?channel=10">
                      <a className="text-white hover:text-green-400">爱情片</a>
                    </Link>
                    <Link href="/channel?channel=16">
                      <a className="text-white hover:text-green-400">纪录片</a>
                    </Link>
                    <Link href="/channel?channel=23">
                      <a className="text-white hover:text-green-400">动画片</a>
                    </Link>
                    <Link href="/channel?channel=2">
                      <a className="text-white hover:text-green-400">
                        更多 &gt;
                      </a>
                    </Link>
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
              title={
                <div className="flex items-baseline">
                  <div className="text-lg font-bold">最新电视剧</div>
                  <Space
                    split={<Divider type="vertical" />}
                    wrap
                    className="text-xs ml-1 md:ml-2 lg:ml-4"
                  >
                    <Link href="/channel?channel=20">
                      <a className="text-white hover:text-green-400">内地剧</a>
                    </Link>
                    <Link href="/channel?channel=4">
                      <a className="text-white hover:text-green-400">香港剧</a>
                    </Link>
                    <Link href="/channel?channel=28">
                      <a className="text-white hover:text-green-400">台湾剧</a>
                    </Link>
                    <Link href="/channel?channel=3">
                      <a className="text-white hover:text-green-400">欧美剧</a>
                    </Link>
                    <Link href="/channel?channel=5">
                      <a className="text-white hover:text-green-400">韩剧</a>
                    </Link>
                    <Link href="/channel?channel=6">
                      <a className="text-white hover:text-green-400">日剧</a>
                    </Link>
                    <Link href="/channel?channel=7">
                      <a className="text-white hover:text-green-400">马泰剧</a>
                    </Link>
                    <Link href="/channel?channel=1">
                      <a className="text-white hover:text-green-400">
                        更多 &gt;
                      </a>
                    </Link>
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
              title={
                <div className="flex items-baseline">
                  <div className="text-lg font-bold">最新综艺</div>
                  <Space
                    split={<Divider type="vertical" />}
                    wrap
                    className="text-xs ml-1 md:ml-2 lg:ml-4"
                  >
                    <Link href="/channel?channel=27">
                      <a className="text-white hover:text-green-400">
                        更多 &gt;
                      </a>
                    </Link>
                  </Space>
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
              title={
                <div className="flex items-baseline">
                  <div className="text-lg font-bold">最新动漫</div>
                  <Space
                    split={<Divider type="vertical" />}
                    wrap
                    className="text-xs ml-1 md:ml-2 lg:ml-4"
                  >
                    <Link href="/channel?channel=24">
                      <a className="text-white hover:text-green-400">国漫</a>
                    </Link>
                    <Link href="/channel?channel=25">
                      <a className="text-white hover:text-green-400">日漫</a>
                    </Link>
                    <Link href="/channel?channel=26">
                      <a className="text-white hover:text-green-400">欧美</a>
                    </Link>
                    <Link href="/channel?channel=17">
                      <a className="text-white hover:text-green-400">
                        更多 &gt;
                      </a>
                    </Link>
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
      </div>
    </section>
  )
}

export default Home
