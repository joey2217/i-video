'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Video } from '@/types'
import useLocalStorage from '@/hooks/useLocalStorage'

interface LikeVideoProps {
  likes: Video[]
  likeIds: number[]
  addLike: (v: Video) => void
  removeLike: (v: Video) => void
}

const LikeVideoContext = React.createContext<LikeVideoProps>({
  likes: [],
  likeIds: [],
  addLike: () => {},
  removeLike: () => {},
})

export function useLikeVideo() {
  return React.useContext(LikeVideoContext)
}

export const LikeVideoProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [likes, setLikes] = useLocalStorage<Video[]>('likes', [])

  const likeIds = useMemo(() => likes.map((v) => v.vod_id), [likes])

  const addLike = useCallback(
    (v: Video) => {
      const video = { ...v, vod_play_url: '', vod_content: '', vod_actor: '' }
      setLikes((list) => [video, ...list])
    },
    [setLikes]
  )
  const removeLike = useCallback(
    (v: Video) => {
      setLikes((list) => list.filter((item) => item.vod_id !== v.vod_id))
    },
    [setLikes]
  )

  return (
    <LikeVideoContext.Provider
      value={{
        likes,
        likeIds,
        addLike,
        removeLike,
      }}
    >
      {children}
    </LikeVideoContext.Provider>
  )
}
