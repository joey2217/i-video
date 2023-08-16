'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Video, VideoRecord, VideoResponse } from '@/types'

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

const LIKE_LOCAL_KEY = 'likes'

export const LikeVideoProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [likes, setLikes] = useState<Video[]>([])

  const likeIds = useMemo(() => likes.map((v) => v.vod_id), [likes])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem(LIKE_LOCAL_KEY)
      if (localData) {
        try {
          const data = JSON.parse(localData) as VideoRecord[]
          setLikes(data)
          const ids = data.map((v) => v.vod_id)
          if (ids.length > 0) {
            fetch(`/fetch/json?ac=detail&ids=${ids}`)
              .then((res) => res.json() as Promise<VideoResponse>)
              .then((res) => {
                res.list.sort(
                  (a, b) => ids.indexOf(a.vod_id) - ids.indexOf(b.vod_id)
                )
                return res.list
              })
              .then((list) => {
                if (list.length > 0) {
                  const recordData = list.map((item, index) => {
                    console.log(item.vod_id === data[index].vod_id)
                    return {
                      ...item,
                      date: data[index].date,
                      path: data[index].path,
                      seek: data[index].seek,
                    }
                  })
                  setLikes(recordData)
                }
              })
              .catch(console.error)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LIKE_LOCAL_KEY, JSON.stringify(likes))
  }, [likes])

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
