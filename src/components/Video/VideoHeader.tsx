'use client'

import React, { memo } from 'react'
import { ChevronLeft } from '../Icons'
import { useRouter } from 'next/navigation'

interface Props {
  title?: string
}

const VideoHeader: React.FC<Props> = ({ title = 'TITLE' }) => {
  const router = useRouter()
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => router.back()}
        className="w-16 flex items-center gap-1 text-lg hover:text-indigo-600"
      >
        <ChevronLeft />
        <span>返回</span>
      </button>
      <div className="flex-1 text-center text-lg font-semibold">{title}</div>
      <div className="w-16 h-5"></div>
    </div>
  )
}

export default memo(VideoHeader)
