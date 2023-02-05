import React, { memo } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import type { Video } from '../types'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Space, Tag } from 'antd'

dayjs.extend(relativeTime)

const SearchItem: React.FC<Video> = (video) => {
  return (
    <div className="flex">
      <div className="w-36 md:w-40 lg:w-52 text-center flex-shrink-0 mr-1 lg:mr-2 relative">
        <Image
          src={video.vod_pic}
          width={270}
          height={400}
          layout="responsive"
          priority
          alt={`${video.vod_name}封面`}
        />
        <div className="absolute top-0 right-0 px-1 text-xs lg:text-sm">
          {video.vod_remarks}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-1 lg:mb-2">
          <span className="text-base font-bold mx-1 lg:mx-2 truncate">
            {video.vod_name}
          </span>
        </div>
        <Space className="mb-1 lg:mb-2" wrap>
          <Tag color="geekblue">{video.type_name}</Tag>
          {video.vod_douban_score && (
            <Tag color="gold">豆瓣:{video.vod_douban_score}</Tag>
          )}
          {
            video.vod_year &&<Tag color="lime">{video.vod_year}</Tag>
          }
          {
            video.vod_area && <Tag color="purple">{video.vod_area}</Tag>
          }
          {
            video.vod_lang && <Tag color="cyan">{video.vod_lang}</Tag>
          }
        </Space>
        {video.vod_tag && (
          <div className="row">
            <div className="info-label">标签</div>
            <div className="info-content">{video.vod_tag}</div>
          </div>
        )}
        {video.vod_actor && (
          <div className="row">
            <div className="info-label">演员</div>
            <div className="info-content" title={video.vod_actor}>
              {video.vod_actor}
            </div>
          </div>
        )}
        <div className="hidden md:block">
          <div className="row ">
            <div className="info-label">简介</div>
            <div className="info-content">{video.vod_content}</div>
          </div>
        </div>
        <div className="w-fit px-4 py-1 stroke-white hover:stroke-green-400 hover:text-green-400 flex items-center rounded border border-solid  border-gray-700 hover:border-transparent cursor-pointer ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z"
              fill="none"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
          <span>播 放</span>
        </div>
      </div>
    </div>
  )
}

export default memo(SearchItem)
