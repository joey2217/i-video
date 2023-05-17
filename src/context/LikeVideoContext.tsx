'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Video } from '@/types'
import useLocalStorage from '@/hooks/useLocalStorage'

interface LikeVideoProps {
  likes: Video[]
  likeIds: number[]
  toggleLike: (v: Video) => void
}

const LikeVideoContext = React.createContext<LikeVideoProps>({
  likes: [],
  likeIds: [],
  toggleLike: () => {},
})

export function useLikeVideo() {
  return React.useContext(LikeVideoContext)
}

export const LikeVideoProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [likes, setLikes] = useLocalStorage<Video[]>('likes', [])

  const likeIds = useMemo(() => likes.map((v) => v.vod_id), [likes])

  const toggleLike = useCallback(
    (v: Video) => {
      if (likeIds.includes(v.vod_id)) {
        setLikes((list) => list.filter((item) => item.vod_id !== v.vod_id))
      } else {
        const video = { ...v, vod_play_url: '', vod_content: '', vod_actor: '' }
        setLikes((list) => [video, ...list])
      }
    },
    [likeIds, setLikes]
  )

  return (
    <LikeVideoContext.Provider
      value={{
        likes,
        likeIds,
        toggleLike,
      }}
    >
      {children}
    </LikeVideoContext.Provider>
  )
}
