'use client'
import React, { memo, useState } from 'react'
import { SearchIcon } from './Icons'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  size?: 'defalut' | 'small'
  className?: string
}

const SearchInput: React.FC<Props> = ({ size = 'defalut', className = '' }) => {
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams.get('q') || '')
  const router = useRouter()

  const onSearch = () => {
    router.push('/search?q=' + value)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className={`relative rounded-md overflow-hidden ${className}`}>
      <input
        type="text"
        placeholder="搜索"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`bg-neutral-200 dark:bg-neutral-700 w-full md:min-w-[260px]  pe-10 shadow-sm  outline-none ${
          size === 'small'
            ? 'py-1.5 px-3 text-sm'
            : 'py-2.5 px-4 text-sm md:text-base'
        }`}
        onKeyDown={onKeyDown}
      />

      <button
        type="button"
        className="absolute inset-y-0 end-0 grid w-12 place-content-center bg-blue-500 text-white hover:bg-blue-500/80"
        onClick={onSearch}
      >
        <span className="sr-only">搜索</span>
        <SearchIcon className="text-2xl" />
      </button>
    </div>
  )
}

export default memo(SearchInput)
