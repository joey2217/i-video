import React, { memo, useState } from 'react'
import Link from 'next/link'
import { Input } from 'antd'
import { useRouter } from 'next/router'
import ActiveLink from './ActiveLink'

const Header: React.FC = () => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const onSearch = (val: string) => {
    console.log(val)
    setValue('')
    router.push(`/search?q=${val}`)
  }

  return (
    <header
      className="bg-gray-900 hover:shadow-md sticky top-0 z-50 px-2 lg:px-4"
      id="header"
    >
      <div className="md:flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-between h-10 md:h-12 flex-shrink-0">
          <Link href="/">
            <a className="text-lg text-gray-800  transition-colors duration-200 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              视频资源网
            </a>
          </Link>

          <div
            className={`${
              router.pathname === '/search' ? 'hidden' : 'flex md:hidden'
            } flex-1 max-w-xs ml-4 items-center justify-center`}
          >
            <Input.Search
              placeholder="输入关键词"
              value={value}
              allowClear
              onChange={(e) => setValue(e.target.value)}
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <div className="flex flex-1 items-center bg-gray-900 h-10 md:h-12">
          <nav className="w-full flex justify-between md:justify-start md:px-2 md:py-3">
            <ActiveLink href="/">
              <a className="link">首页</a>
            </ActiveLink>
            <ActiveLink href="/movie">
              <a className="link">电影</a>
            </ActiveLink>
            <ActiveLink href="/tv">
              <a className="link">电视剧</a>
            </ActiveLink>
            <ActiveLink href="/cartoon">
              <a className="link">动漫</a>
            </ActiveLink>
            <ActiveLink href="/variety">
              <a className="link">综艺</a>
            </ActiveLink>
            <ActiveLink href="/search">
              <a className="link">搜索</a>
            </ActiveLink>
            <ActiveLink href="/favorites">
              <a className="link">收藏</a>
            </ActiveLink>
            <ActiveLink href="/record">
              <a className="link">看过</a>
            </ActiveLink>
          </nav>
          <div
            className={`px-1 hidden ${
              router.pathname === '/search' ? '' : 'md:flex'
            } w-80 lg:w-[500px] items-center bg-gray-900`}
          >
            <Input.Search
              placeholder="输入关键词"
              value={value}
              allowClear
              onChange={(e) => setValue(e.target.value)}
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
