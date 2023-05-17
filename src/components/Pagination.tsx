import Link from 'next/link'
import React, { memo } from 'react'
import { ChevronLeft, ChevronRight } from './Icons'

interface Props {
  page: number | string
  totalPage: number | string
  prevHref?: string
  nextHref?: string
}

const Pagination: React.FC<Props> = ({
  page,
  prevHref,
  nextHref,
  totalPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 text-sm md:text-base lg:text-lg">
      <Link
        href={prevHref || 'javascript:void(0)'}
        className="text-2xl border rounded-md px-2 py-0.5 hover:text-blue-600 hover:border-blue-600"
        title="上一页"
      >
        <ChevronLeft />
      </Link>
      <div>
        <span>{page}</span>
        <span>/</span>
        <span>{totalPage}</span>
      </div>
      <Link
        href={nextHref || 'javascript:void(0)'}
        className="text-2xl border rounded-md px-2 py-0.5 hover:text-blue-600 hover:border-blue-600"
        title="下一页"
      >
        <ChevronRight />
      </Link>
    </div>
  )
}

export default memo(Pagination)
