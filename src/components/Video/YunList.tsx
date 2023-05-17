'use client'

import React, { memo } from 'react'
import PlayList from './PlayList'
import type { PlayItem } from '@/types'

interface Props {
  yunList: PlayItem[]
}

const YunList: React.FC<Props> = ({ yunList }) => {
  return (
    <PlayList
      dataSource={yunList}
      renderItem={(item) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={item.url}
          className='text-center px-4 py-1 ring-1 hover:text-blue-600 hover:ring-blue-600 rounded-md'
        >
          {item.name}
        </a>
      )}
    />
  )
}

export default memo(YunList)
