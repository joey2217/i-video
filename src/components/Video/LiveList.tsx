'use client'

import React, { memo } from 'react'
import PlayList from './PlayList'
import type { PlayItem } from '@/types'
import Link from 'next/link'

interface Props {
  m3u8List: PlayItem[]
  currentNum: number
  baseUrl: string
}

const LiveList: React.FC<Props> = ({ m3u8List, currentNum, baseUrl }) => {
  return (
    <PlayList
      dataSource={m3u8List}
      renderItem={(item, index) => (
        <Link
          className={`${
            currentNum === index ? 'text-blue-600' : ''
          } text-center px-4 py-1 ring-1 hover:text-blue-600 hover:ring-blue-600 rounded-md`}
          href={`${
            currentNum === index ? 'javascript:void(0)' : `${baseUrl}${index}`
          }`}
          key={item.url}
        >
          {item.name}
        </Link>
      )}
      currentIndex={currentNum}
    />
  )
}

export default memo(LiveList)
