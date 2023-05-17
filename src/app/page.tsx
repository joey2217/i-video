import BannerSwiper from '@/components/BannerSwiper'
import RecordList from '@/components/RecordList'
import VideoCard from '@/components/VideoCard'
import type { VideoResponse } from '@/types'
import { BASE_URL, HOT, RESOURCE_TYPES } from '@/utils/constants'
import Link from 'next/link'

const HOT_MOVIE_IDS = [
  40626, //流浪地球
  40650, // 满江红
  43017, //灌篮高手
  42928, //忠犬八公
  42076, // 保你平安
  31756, // 四海
]

const HOT_TV_IDS = [
  42772, // 漫长的季节
  42963, // 平凡之路
  42475, // 长月烬明
  41732, // 黑暗荣耀
  40396, // 狂飙
  40174, // 重启人生
]
const HOT_VARIETY_IDS = [
  42991, // 乘风2023
  41054, // 种地吧
  42767, // 奔跑吧 第七季
  40529, // 大侦探 第八季
  42524, // 青春环游记 第四季
  43111, // 来活了兄弟
]
const HOT_CARTOON_IDS = [
  32742, // 海贼王
  33346, // 死神 千年血战篇
  42168, // 画江湖之不良人 第六季
  32192, // 凡人修仙传
  42684, // 鬼灭之刃 锻刀村篇
  32738, // 火影忍者：博人传之次世代继承者
]

export default async function Page({}: {}) {
  const movieRes = fetch(`${BASE_URL}?ac=detail&ids=${HOT_MOVIE_IDS}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) =>
      res.list.sort(
        (a, b) =>
          HOT_MOVIE_IDS.indexOf(a.vod_id) - HOT_MOVIE_IDS.indexOf(b.vod_id)
      )
    )
  const tvRes = fetch(`${BASE_URL}?ac=detail&ids=${HOT_TV_IDS}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) =>
      res.list.sort(
        (a, b) => HOT_TV_IDS.indexOf(a.vod_id) - HOT_TV_IDS.indexOf(b.vod_id)
      )
    )
  const varietyRes = fetch(`${BASE_URL}?ac=detail&ids=${HOT_VARIETY_IDS}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) =>
      res.list.sort(
        (a, b) => HOT_TV_IDS.indexOf(a.vod_id) - HOT_TV_IDS.indexOf(b.vod_id)
      )
    )
  const cartoonRes = fetch(`${BASE_URL}?ac=detail&ids=${HOT_CARTOON_IDS}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) =>
      res.list.sort(
        (a, b) => HOT_TV_IDS.indexOf(a.vod_id) - HOT_TV_IDS.indexOf(b.vod_id)
      )
    )
  const [movies, tvs, variety, cartoon] = await Promise.all([
    movieRes,
    tvRes,
    varietyRes,
    cartoonRes,
  ])
  return (
    <section>
      {/* <BannerSwiper bannerData={HOT} /> */}

      <div className="my-3">
        <div className="my-2">
          <h2 className="text-xl font-semibold">看过</h2>
        </div>
        <RecordList count={6} />
      </div>
      <div className="my-3">
        <div className="my-2 flex gap-2 items-baseline flex-wrap md:gap-4">
          <h2 className="text-xl font-semibold">电影</h2>
          {RESOURCE_TYPES.movie.map((m) => (
            <Link href={`/r/movie/${m.value}`} key={m.value} className="link">
              {m.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((m) => (
            <VideoCard key={m.vod_id} video={m} />
          ))}
        </div>
      </div>
      <div className="my-3">
        <div className="my-2 flex gap-2 items-baseline flex-wrap md:gap-4">
          <h2 className="text-xl font-semibold">电视剧</h2>
          {RESOURCE_TYPES.tv.map((m) => (
            <Link href={`/r/tv/${m.value}`} key={m.value} className="link">
              {m.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tvs.map((m) => (
            <VideoCard key={m.vod_id} video={m} />
          ))}
        </div>
      </div>
      <div className="my-3">
        <div className="my-2 flex gap-2 items-baseline flex-wrap md:gap-4">
          <h2 className="text-xl font-semibold">动漫</h2>
          {RESOURCE_TYPES.cartoon.map((m) => (
            <Link href={`/r/movie/${m.value}`} key={m.value} className="link">
              {m.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cartoon.map((m) => (
            <VideoCard key={m.vod_id} video={m} />
          ))}
        </div>
      </div>
      <div className="my-3">
        <div className="my-2 flex gap-2 items-baseline flex-wrap md:gap-4">
          <h2 className="text-xl font-semibold">综艺</h2>
          {RESOURCE_TYPES.variety.map((m) => (
            <Link href={`/r/variety/${m.value}`} key={m.value} className="link">
              {m.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm::grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {variety.map((m) => (
            <VideoCard key={m.vod_id} video={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
