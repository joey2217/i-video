import React, { memo } from 'react'
import type { Video } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface Props {
  video: Video
}

const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <Link
      href={`/v/${video.vod_id}`}
      className="rounded-md overflow-hidden cursor-pointer border border-solid border-slate-900/20 dark:border-slate-50/20 hover:border-transparent hover:shadow-md hover:shadow-neutral-500"
    >
      <div className="relative">
        <Image
          width={270}
          height={400}
          src={video.vod_pic}
          alt={`${video.vod_name}封面`}
          className="w-full aspect-[2/3] object-cover"
        />
        <div className="absolute top-0 right-0  text-sm bg-gray-400 bg-opacity-80 text-white px-1">
          豆瓣 : {video.vod_douban_score || '无'}
        </div>
      </div>
      <div className="truncate text-base text-opacity-90 p-1 hover:text-blue-600">
        {video.vod_name}
      </div>
      <div className="truncate text-neutral-500 px-1 pb-1">
        {video.vod_remarks}({dayjs(video.vod_time).fromNow()})
      </div>
    </Link>
  )
}

export default memo(VideoCard)
