import React, { memo, useState } from 'react'
import Link from 'next/link'
import { Input } from 'antd'
import { useRouter } from 'next/router'
import ActiveLink from './ActiveLink'

const Header: React.FC = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const onSearch = (val: string) => {
    setValue('')
    setShow(false)
    router.push(`/search?q=${val}`)
  }

  return (
    <header
      className="bg-gray-900 hover:shadow-md sticky top-0 z-50 px-0 md:px-2 lg:px-4"
      id="header"
    >
      <div className="md:flex h-12">
        <div className="flex items-center justify-between h-full flex-shrink-0">
          <Link href="/">
            <a className="text-lg text-gray-800  transition-colors duration-200 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
              视频资源网
            </a>
          </Link>

          <div
            className="flex items-center justify-center md:hidden cursor-pointer w-8 h-8 "
            onClick={() => setShow((s) => !s)}
          >
            {show ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="currentColor"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8L40 40"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 40L40 8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`${
            show ? 'flex' : 'hidden'
          }  bg-gray-900 md:flex md:items-center md:justify-between`}
          onClick={() => show && setShow(false)}
        >
          <nav className="w-full flex flex-col px-2 py-3 md:flex-row md:mx-0 md:py-0">
            <ActiveLink href="/">
              <a className="link">首页</a>
            </ActiveLink>
            <ActiveLink href="/channel?channel=2">
              <a className="link">频道</a>
            </ActiveLink>
            <ActiveLink href="/search">
              <a className="link">搜索</a>
            </ActiveLink>
            <ActiveLink href="/favorites">
              <a className="link">收藏</a>
            </ActiveLink>
          </nav>
        </div>
        <div
          className={`${show ? 'flex pb-4 px-1' : 'hidden'} ${
            router.pathname === '/search' ? 'hidden' : 'md:flex'
          } md:w-80 items-center ml-auto bg-gray-900`}
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
    </header>
  )
}

export default memo(Header)
