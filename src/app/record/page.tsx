import RecordList from '@/components/RecordList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '看过 - 视频资源网',
  }

export default function RecordPage() {
  return (
    <div className="my-2 md:my-4 page">
      <RecordList />
    </div>
  )
}
