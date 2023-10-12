import Pagination from '@/components/Pagination'
import SearchItem from '@/components/SearchItem'
import { VideoResponse } from '@/types'
import { BASE_URL } from '@/utils/constants'
import Link from 'next/link'

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'

// false | 'force-cache' | 0 | number
export const revalidate = 7200
// 'auto' | 'default-cache' | 'only-cache'
// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'
export const fetchCache = 'default-no-store'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  const { q = '', page = '' } = searchParams || {}

  const pageNum = Number(page) || 1

  const { list, pagecount } = await fetch(
    `${BASE_URL}?ac=detail&wd=${q}&pg=${pageNum}`
  ).then((res) => res.json() as Promise<VideoResponse>)

  if (list.length === 0) {
    return <div className="my-4 text-center">暂无数据</div>
  }

  return (
    <div>
      <div className="divide-y divide-neutral-500">
        {list.map((v) => (
          <Link
            key={v.vod_id}
            href={'/v/' + v.vod_id}
            className="block p-2 m-2"
          >
            <SearchItem video={v} />
          </Link>
        ))}
      </div>
      <Pagination
        page={pageNum}
        totalPage={pagecount}
        prevHref={pageNum === 1 ? '' : `/search?q=${q}&page=${pageNum - 1}`}
        nextHref={
          pageNum === pagecount ? '' : `/search?q=${q}&page=${pageNum + 1}`
        }
      />
    </div>
  )
}
