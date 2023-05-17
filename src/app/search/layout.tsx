import SearchInput from '@/components/SearchInput'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '搜索 - 视频资源网',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="my-4">
      <div className="mb-4">
        <SearchInput />
      </div>
      {children}
    </section>
  )
}
