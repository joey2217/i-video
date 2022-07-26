import React, { memo } from 'react'
import Image from 'next/image'

const LoadingCard: React.FC = () => {
  return (
    <div className="rounded-md cursor-pointer border border-solid border-gray-700 hover:border-transparent hover:shadow-md hover:shadow-gray-400">
      <div className="relative">
        <Image
          src="/loading.png"
          width={270}
          height={400}
          layout="responsive"
          alt="loading"
        />
      </div>
      <div className="truncate text-base text-white text-opacity-90 p-1 hover:text-green-400">
        加载中...
      </div>
      <div className="truncate text-[#e8e6e380] px-1 pb-1">加载中...</div>
    </div>
  )
}

export default memo(LoadingCard)
