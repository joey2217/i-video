'use client'

import React, { memo } from 'react'
import ThemeButton from './ThemeButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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
    <header className="bg-white dark:bg-gray-900 hover:shadow-md sticky top-0 z-50 px-2 lg:px-4 border-b border-slate-900/20 dark:border-slate-50/20">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 link">
          <Image
            src="/logo.png"
            alt="logo"
            width={192}
            height={192}
            className="w-6 h-6"
          />
          <span className="text-base font-semibold md:text-lg">视频资源网</span>
        </Link>
        <nav className="mr-auto flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive =
              link.key === '/'
                ? pathname === '/'
                : pathname.startsWith(link.key)

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
        <ThemeButton />
      </div>
    </header>
  )
}

export default memo(Header)
