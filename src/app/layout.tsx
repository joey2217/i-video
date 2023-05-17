import Header from '@/components/Header'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import './globals.css'
import Providers from '@/context/Providers'
import type { Metadata } from 'next'

dayjs.locale('zh-cn')

export const metadata: Metadata = {
  title: '视频资源网',
  description: '视频在线播放平台',
  keywords: ['视频', '在线播放', '电影', '电视剧', '动漫', '综艺'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <Providers>
        <body>
          <Header />
          <main className="mb-4 px-2"> {children}</main>
          <footer className="text-sm md:text-base text-center mb-4">
            所有资源均来自互联网
          </footer>
        </body>
      </Providers>
    </html>
  )
}
