'use client'

import React, { memo } from 'react'
import ThemeButton from './ThemeButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SearchInput from '../SearchInput'

const navLinks = [
  {
    href: '/',
    name: '首页',
    key: '/',
  },
  {
    href: '/r/movie',
    name: '电影',
    key: '/r/movie',
  },
  {
    href: '/r/tv',
    name: '电视剧',
    key: '/r/tv',
  },
  {
    href: '/r/cartoon',
    name: '动漫',
    key: '/r/cartoon',
  },
  {
    href: '/r/variety',
    name: '综艺',
    key: '/r/variety',
  },
  {
    href: '/search',
    name: '搜索',
    key: '/search',
  },
  {
    href: '/record',
    name: '看过',
    key: '/record',
  },
  {
    href: '/like',
    name: '喜欢',
    key: '/like',
  },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className=" bg-white dark:bg-neutral-900 hover:shadow-md sticky top-0 z-50 px-1 md:px-2 lg:px-4 border-b border-slate-900/20 dark:border-slate-50/20">
      <div className="md:flex flex-col md:flex-row items-center gap-1 md:gap-2 lg:gap-4">
        <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-2 lg:gap-4 link truncate shrink-0"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={192}
              height={192}
              className="w-6 h-6"
            />
            <span className="text-base font-semibold md:text-lg">
              视频资源网
            </span>
          </Link>
          <div className="ml-auto shrink flex items-center md:hidden h-10">
            <SearchInput
              size="small"
              className={pathname === '/search' ? 'hidden' : 'w-fit'}
            />
            <ThemeButton />
          </div>
        </div>
        <nav className="flex items-center justify-around md:justify-normal gap-1 md:gap-2 lg:gap-4 text-sm md:text-base h-10">
          {navLinks.map((link) => {
            const isActive =
              link.key === '/'
                ? pathname === '/'
                : pathname?.startsWith(link.key)

            return (
              <Link
                className={`${isActive ? 'active' : ''} link`}
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="ml-auto hidden md:flex h-10 items-center">
          <SearchInput
            size="small"
            className={pathname === '/search' ? 'hidden' : ''}
          />
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
