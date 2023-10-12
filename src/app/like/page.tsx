import LikeList from '@/components/LikeList'
import type  { Metadata } from 'next'

export const metadata: Metadata = {
  title: '喜欢 - 视频资源网',
}

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default function LikePage({}: {}) {
  return (
    <div className="my-2 md:my-4 page">
      <LikeList />
    </div>
  )
}
