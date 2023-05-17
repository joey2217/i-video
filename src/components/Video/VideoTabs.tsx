'use client'

import React, { memo, useMemo, useState } from 'react'
import type { PlayItem, Video } from '@/types'
import LiveList from './LiveList'
import YunList from './YunList'
import VideoInfo from './VideoInfo'

interface Props {
  video: Video
  m3u8List: PlayItem[]
  yunList: PlayItem[]
  currentNum: number
  baseUrl: string
}

type Tab = 'live' | 'yun' | 'info'

const tabs: { value: Tab; label: string }[] = [
  {
    label: '在线播放',
    value: 'live',
  },
  {
    label: '云播(站外)',
    value: 'yun',
  },
  {
    label: '简介',
    value: 'info',
  },
]

const VideoTabs: React.FC<Props> = ({
  video,
  m3u8List,
  yunList,
  currentNum,
  baseUrl,
}) => {
  const [tab, setTab] = useState<Tab>('live')

  const tabData = useMemo(() => {
    if (tab === 'live') {
      return (
        <LiveList
          m3u8List={m3u8List}
          currentNum={currentNum}
          baseUrl={baseUrl}
        />
      )
    } else if (tab === 'yun') {
      return <YunList yunList={yunList} />
    } else if (tab === 'info') {
      return <VideoInfo {...video} />
    }
    return <div>{tab}</div>
  }, [baseUrl, currentNum, m3u8List, tab, video, yunList])

  return (
    <div>
      <nav className="my-4 py-0.5 p-1 bg-neutral-200 dark:bg-neutral-800 grid grid-cols-3 gap-4 text-center rounded-md">
        {tabs.map((t) => (
          <button
            key={t.value}
            className={`${tab === t.value ? 'text-blue-600 bg-white dark:bg-black' : ''} rounded-md py-0.5`}
            onClick={() => setTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      {tabData}
    </div>
  )
}

export default memo(VideoTabs)
