import { TypeKey } from '@/types'
import { RESOURCE_TITLE_MAP, RESOURCE_TYPES } from '@/utils/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

export function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Metadata {
  const [res = 'movie'] = params.slug || []

  return {
    title: RESOURCE_TITLE_MAP[res as TypeKey] + ' - 视频资源网',
  }
}

export default function MovieLayout({
  params,
  children,
}: {
  params: { slug: string[] }
  children: React.ReactNode
}) {
  const [res = 'movie', typeStr] = params.slug || []
  const types = RESOURCE_TYPES[res as TypeKey]
  const type = typeStr || types[0].value
  return (
    <section className="page">
      <div className="my-2 p-1 mx-auto w-fit bg-neutral-200 dark:bg-neutral-800 rounded-md flex items-center flex-wrap justify-center">
        {types.map((t) => (
          <Link
            key={t.value}
            href={`/r/${res}/${t.value}`}
            className={`${
              type === t.value ? 'text-blue-600 bg-white dark:bg-black' : ''
            } px-2 py-0.5 rounded-md`}
          >
            {t.label}
          </Link>
        ))}
      </div>
      {children}
    </section>
  )
}
