import React, { memo } from 'react'
import type { Video } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

interface Props {
  video: Video
}

const VideoRecordCard: React.FC<Props> = ({ video }) => {
  return (
    <Link
      href={`/v/${video.vod_id}`}
      className="rounded-md cursor-pointer border border-solid border-gray-700 hover:border-transparent hover:shadow-md hover:shadow-gray-400"
    >
      <div className="relative">
        <Image
          width={270}
          height={400}
          src={video.vod_pic}
          alt={`${video.vod_name}封面`}
          className="w-full"
        />
        <div className="absolute top-0 right-0  text-sm bg-gray-400 bg-opacity-80 text-white px-1">
          豆瓣 : {video.vod_douban_score || '无'}
        </div>
        <div className="absolute bottom-0 right-0 text-sm bg-gray-400 bg-opacity-80 text-white px-1 truncate">
          {dayjs(video.vod_time).fromNow()}更新({video.vod_remarks})
        </div>
      </div>
      <div className="truncate text-base text-opacity-90 p-1 hover:text-blue-600">
        {video.vod_name}
      </div>
      <div className="truncate text-neutral-500 px-1 pb-1">{video.vod_tag}</div>
    </Link>
  )
}

export default memo(VideoRecordCard)
