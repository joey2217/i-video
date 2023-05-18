import VideoHeader from '@/components/Video/VideoHeader'
import VideoPlayer from '@/components/Video/VideoPlayer'
import VideoTabs from '@/components/Video/VideoTabs'
import type { VideoResponse } from '@/types'
import { parseVideoPlayUrl } from '@/utils'
import { BASE_URL } from '@/utils/constants'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const [id] = params.slug
  const video = await fetch(`${BASE_URL}?ac=detail&ids=${id}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) => res.list[0])

  return {
    title: video.vod_name + ' - 视频资源网',
  }
}

export default async function VideoPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const [id, numStr = ''] = params.slug

  const num = Number(numStr) || 0

  const video = await fetch(`${BASE_URL}?ac=detail&ids=${id}`)
    .then((res) => res.json() as Promise<VideoResponse>)
    .then((res) => res.list[0])

  const { vod_play_from, vod_play_url, vod_name } = video
  const { m3u8List, yunList } = parseVideoPlayUrl(vod_play_from, vod_play_url)

  const live = m3u8List[num]

  if (video == null || live == null) {
    return <div className="text-center">暂无数据</div>
  }

  return (
    <section className="mt-2 page">
      <VideoHeader title={vod_name} video={video} />
      <VideoPlayer liveUrl={live.url} video={video} />
      <VideoTabs
        video={video}
        m3u8List={m3u8List}
        yunList={yunList}
        currentNum={num}
        baseUrl={`/v/${id}/`}
      />
    </section>
  )
}
