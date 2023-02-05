import React, { memo } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import type { Video } from '../types'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'

dayjs.extend(relativeTime)

const VideoInfo: React.FC<Video> = (video) => {
  return (
    <div>
      <div className="text-base font-bold  mb-1 lg:mb-2 truncate">
        {video.vod_name}
      </div>
      <div className="max-w-xs text-center mb-1 lg:mb-2">
        <Image
          src={video.vod_pic}
          width={270}
          height={400}
          layout="responsive"
          alt={`${video.vod_name}封面`}
        />
      </div>
      <div className="row">
        <div className="info-label">别名</div>
        <div className="info-content">{video.vod_sub}</div>
      </div>
      <div className="row">
        <div className="info-label">标签</div>
        <div className="info-content">{video.vod_tag}</div>
      </div>
      <div className="row">
        <div className="info-label">导演</div>
        <div className="info-content">{video.vod_director}</div>
      </div>
      <div className="row">
        <div className="info-label">区域</div>
        <div className="info-content">{video.vod_area}</div>
      </div>
      <div className="row">
        <div className="info-label">更新</div>
        <div className="info-content">
          {video.vod_remarks}/共{video.vod_total}集
        </div>
      </div>
      <div className="row">
        <div className="info-label">完结</div>
        <div className="info-content">
          {video.vod_isend === 0 ? '更新中' : '已完结'}
        </div>
      </div>
      <div className="row">
        <div className="info-label">语言</div>
        <div className="info-content">{video.vod_lang}</div>
      </div>
      <div className="row">
        <div className="info-label">年份</div>
        <div className="info-content">{video.vod_year}</div>
      </div>
      <div className="row">
        <div className="info-label">分类</div>
        <div className="info-content">
          <Link href={`/channel?channel=${video.type_id}`}>
            <a>{video.type_name}</a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="info-label">豆瓣评分</div>
        <div className="info-content">{video.vod_douban_score || '无'}</div>
      </div>
      <div className="row">
        <div className="info-label">更新时间</div>
        <div className="info-content">{dayjs(video.vod_time).fromNow()}</div>
      </div>
      <div className="row ">
        <div className="info-label">演员</div>
        <div className="info-content" title={video.vod_actor}>
          {video.vod_actor}
        </div>
      </div>
      <div className="row ">
        <div className="info-label">简介</div>
        <div className="info-content">{video.vod_content}</div>
      </div>
    </div>
  )
}

export default memo(VideoInfo)
