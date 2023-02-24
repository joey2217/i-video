import React, { memo, useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import type { IHistory, Video } from '../../types'
import relativeTime from 'dayjs/plugin/relativeTime'
import { seconds2Minute } from '../../utils'
import DeleteOutlineRounded from '../../components/icons/DeleteOutlineRounded'

dayjs.extend(relativeTime)

interface Props {
  video: Video
  isHistory?: boolean
  showDelete?: boolean
  onDelete?: (id: number) => void
}

const VideoCard: React.FC<Props> = ({
  video,
  isHistory = false,
  showDelete = false,
  onDelete,
}) => {
  const [show, setShow] = useState(false)
  const onDeleteClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // e.stopPropagation()
      e.preventDefault()
      if (onDelete) {
        onDelete(video.vod_id)
      }
    },
    [onDelete, video.vod_id]
  )
  const onMouseEnter = useCallback(() => {
    if (showDelete) {
      setShow(true)
    }
  }, [showDelete])
  const onMouseLeave = useCallback(() => {
    if (showDelete) {
      setShow(false)
    }
  }, [showDelete])
  return (
    <Link href={`/v/${video.vod_id}`}>
      <a
        className="rounded-md cursor-pointer border border-solid border-gray-700 hover:border-transparent hover:shadow-md hover:shadow-gray-400"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative">
          <Image
            src={video.vod_pic}
            width={270}
            height={400}
            layout="responsive"
            priority
            alt={`${video.vod_name}封面`}
          />
          {showDelete && show && (
            <div
              className="absolute top-0 left-0 z-10 text-xl text-white hover:text-gray-400"
              title="删除"
              onClick={onDeleteClick}
            >
              <DeleteOutlineRounded />
            </div>
          )}
          {isHistory ? (
            <div className="absolute top-0 right-0 text-sm bg-gray-400 bg-opacity-80 text-white px-1">
              <span className="pr-1">{(video as IHistory).episodeName}</span>
              <span>
                观看至
                {(video as IHistory).seekPercentage
                  ? (video as IHistory).seekPercentage
                  : seconds2Minute((video as IHistory).seek)}
              </span>
            </div>
          ) : (
            <div className="absolute top-0 right-0  text-sm bg-gray-400 bg-opacity-80 text-white px-1">
              豆瓣 : {video.vod_douban_score || '无'}
            </div>
          )}
          <div className="absolute bottom-0 right-0 text-sm bg-gray-400 bg-opacity-80 text-white px-1">
            {dayjs(video.vod_time).fromNow()}更新({video.vod_remarks})
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
