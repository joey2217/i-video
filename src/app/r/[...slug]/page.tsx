import Pagination from '@/components/Pagination'
import VideoCard from '@/components/VideoCard'
import type { TypeKey, VideoResponse } from '@/types'
import { BASE_URL, RESOURCE_TYPES } from '@/utils/constants'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const [res = 'movie', typeStr, pageStr] = params.slug || []
  const types = RESOURCE_TYPES[res as TypeKey]
  const type = typeStr || types[0].value
  const page = Number(pageStr) || 1

  const { list, pagecount } = await fetch(
    `${BASE_URL}?ac=detail&t=${type}&pg=${page}`
  ).then((res) => res.json() as Promise<VideoResponse>)

  return (
    <>
      <div className="my-2 grid gap-1 md:gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
        {list.map((v) => (
          <VideoCard video={v} key={v.vod_id} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPage={pagecount}
        prevHref={page === 1 ? '' : `/r/${res}/${type}/${page - 1}`}
        nextHref={page === pagecount ? '' : `/r/${res}/${type}/${page + 1}`}
      />
    </>
  )
}
