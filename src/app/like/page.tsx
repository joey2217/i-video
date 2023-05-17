import LikeList from '@/components/LikeList'
import type  { Metadata } from 'next'

export const metadata: Metadata = {
  title: '喜欢 - 视频资源网',
}


export default function LikePage({}: {}) {
  return (
    <div className="my-2 md:my-4">
      <LikeList />
    </div>
  )
}