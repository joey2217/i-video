import BannerSwiper from '@/components/BannerSwiper'
import RecordList from '@/components/RecordList'
import VideoCard from '@/components/VideoCard'
import type { VideoResponse } from '@/types'
import { BASE_URL, HOT, RESOURCE_TYPES } from '@/utils/constants'
import Link from 'next/link'

const HOT_MOVIE_IDS = [43017]

export default async function Page({}: {}) {
  const movieRes = fetch(`${BASE_URL}?ac=detail&ids=${HOT_MOVIE_IDS}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) => res.list)
  const [movies] = await Promise.all([movieRes])
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
          {movies.map((m) => (
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
          {movies.map((m) => (
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
          {movies.map((m) => (
            <VideoCard key={m.vod_id} video={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
