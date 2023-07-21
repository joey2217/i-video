'use client'

import React, { memo, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

interface Props<T = any> {
  dataSource: T[]
  currentIndex?: number
  renderItem: (item: T, index: number) => ReactNode
}

const SIZE = 120

const PlayList: React.FC<Props> = ({
  dataSource,
  renderItem,
  currentIndex,
}) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (currentIndex != null && dataSource.length > SIZE) {
      const num = Math.floor(currentIndex / SIZE)
      setValue(num)
    }
  }, [currentIndex, dataSource.length])

  const tabs = useMemo(() => {
    if (dataSource.length > SIZE) {
      const num = Math.ceil(dataSource.length / SIZE)
      const list = new Array(num).fill(null)
      const len = list.length
      return list.map((_, i) => {
        return {
          label: `${i * SIZE + 1} - ${
            i === len - 1 ? dataSource.length : (i + 1) * SIZE
          }`,
          value: i,
        }
      })
    }
    return []
  }, [dataSource.length])

  const list = useMemo(() => {
    return dataSource.slice(value * SIZE, (value + 1) * SIZE)
  }, [dataSource, value])

  if (dataSource.length === 0) {
    return <div className="text-center">暂无数据</div>
  }

  if (dataSource.length < SIZE) {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-4 items-start">
        {dataSource.map(renderItem)}
      </div>
    )
  }
  return (
    <div>
      <div className="mx-auto w-fit py-1 px-2 bg-neutral-200 dark:bg-neutral-800 text-center rounded-md flex gap-4 items-center flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`${
              value === tab.value ? 'text-blue-600 bg-white dark:bg-black' : ''
            } rounded py-0.5 px-2`}
            onClick={() => setValue(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="my-2 md:my-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-3 items-start">
        {list.map((item, i) => renderItem(item, value * SIZE + i))}
      </div>
    </div>
  )
}

export default memo(PlayList)
