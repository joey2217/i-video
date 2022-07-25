import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Video } from '../../types'

interface Props {
  video: Video
}

const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <Link href={`/v/${video.vod_id}`}>
      <a className="rounded-md cursor-pointer border border-solid border-gray-700 hover:border-transparent hover:shadow-md hover:shadow-gray-400">
        <div className="relative">
          <Image
            src={video.vod_pic}
            width={270}
            height={400}
            layout="responsive"
            alt={`${video.vod_name}封面`}
          />
          <div className="absolute top-0 right-0  text-sm bg-gray-400 bg-opacity-80 text-white px-1">
            豆瓣 : {video.vod_douban_score || '无'}
          </div>
          <div className="absolute bottom-0 right-0 text-sm bg-gray-400 bg-opacity-80 text-white px-1">
            {video.vod_time}更新
          </div>
        </div>
        <div className="truncate text-base text-white text-opacity-90 p-1 hover:text-green-400">
          {video.vod_name}
        </div>
        <div className="truncate text-[#e8e6e380] px-1 pb-1">
          {video.vod_tag}
        </div>
      </a>
    </Link>
  )
}

export default memo(VideoCard)
