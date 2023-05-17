'use client'
import React, { memo, useState } from 'react'
import { SearchIcon } from './Icons'
import { useRouter } from 'next/navigation'

interface Props {
  defalutValue?: string
}

const SearchInput: React.FC<Props> = ({ defalutValue = '' }) => {
  const [value, setValue] = useState(defalutValue)
  const router = useRouter()

  const onSearch = () => {
    router.push('/search?q=' + value)
  }

  return (
    <div className="relative rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="搜索"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-neutral-200 dark:bg-neutral-700 w-full py-2.5 px-4 pe-10 shadow-sm text-sm md:text-base outline-none"
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
