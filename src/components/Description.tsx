import React, { memo } from 'react'
import { Video } from '../types'

const Description: React.FC<Video> = (video) => {
  return (
    <div>
      <div className="text-base font-bold mb-2  truncate">{video.vod_name}</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 md:col-span-1 description-row">
          <div className="description-row-label">区域</div>
          <div className="description-row-content">{video.vod_area}</div>
        </div>
        <div className="col-span-2 md:col-span-1 description-row">
          <div className="description-row-label">语言</div>
          <div className="description-row-content">{video.vod_lang}</div>
        </div>
        <div className="col-span-2 md:col-span-1 description-row">
          <div className="description-row-label">年份</div>
          <div className="description-row-content">{video.vod_year}</div>
        </div>
        <div className="col-span-2 md:col-span-1 description-row">
          <div className="description-row-label">分类</div>
          <div className="description-row-content">{video.type_name}</div>
        </div>
        <div className="col-span-2   description-row">
          <div className="description-row-label">更新时间</div>
          <div className="description-row-content">{video.vod_time}</div>
        </div>
        <div className="col-span-2   description-row">
          <div className="description-row-label">标签</div>
          <div className="description-row-content" title={video.vod_tag}>
            {video.vod_tag}
          </div>
        </div>
        <div className="col-span-2  description-row">
          <div className="description-row-label">演员</div>
          <div className="description-row-content" title={video.vod_actor}>
            {video.vod_actor}
          </div>
        </div>
        <div className="col-span-2  description-row">
          <div className="description-row-label">简介</div>
          <div
            className="description-row-content-row-2 "
            title={video.vod_blurb}
          >
            {video.vod_blurb}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Description)
