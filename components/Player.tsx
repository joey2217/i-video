import React, { memo, useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { throttle } from '../utils'

interface Props {
  liveUrl?: string
  playUrl?: string
  onEnd?: () => void
  onTimeUpdate?: (seek: number) => void
  seek?: number
}

let hls: Hls

const HlsPlayer: React.FC<Props> = ({ liveUrl, seek, onEnd, onTimeUpdate }) => {
  const videoEl = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    try {
      const video = videoEl.current
      if (hls != null) {
        hls.destroy()
      }
      if (Hls.isSupported()) {
        hls = new Hls()
        if (video && liveUrl) {
          console.log(liveUrl, 'liveUrl')
          if (hls) {
            hls.attachMedia(video)
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
              console.log('video and hls.js are now bound together !')
              hls.loadSource(liveUrl)
              hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                console.log(
                  'manifest loaded, found ' +
                    data.levels.length +
                    ' quality level'
                )
              })
            })
            hls.on(Hls.Events.ERROR, function (event, data) {
              const errorType = data.type
              const errorDetails = data.details
              const errorFatal = data.fatal
              console.error('error', errorType, errorDetails, errorFatal)
            })
            // hls.on(Hls.Events.MANIFEST_PARSED, function () {
            //   video.play();
            // });
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = liveUrl
            video.addEventListener('loadedmetadata', function () {
              video.play()
            })
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [liveUrl])

  useEffect(() => {
    const video = videoEl.current
    const timeupdate = throttle(
      () => {
        // console.log(video && video.currentTime, 'timeupdate currentTime')
        if (onTimeUpdate && video && video.currentTime > 0) {
          onTimeUpdate(Math.round(video.currentTime))
        }
      },
      30 * 1000,
      { leading: false }
    )
    const onPlay = () => {
      if (video) {
        if (seek != null) {
          video.currentTime = seek
        }
        if (video.paused) {
          video.play()
        }
      }
    }
    const ended = () => {
      if (onEnd) {
        onEnd()
      }
    }
    if (video) {
      video.addEventListener('timeupdate', timeupdate)
      video.addEventListener('loadedmetadata', onPlay)
      video.addEventListener('ended', ended)
    }
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', timeupdate)
        video.removeEventListener('loadedmetadata', onPlay)
        video.removeEventListener('ended', ended)
      }
    }
  }, [onEnd, onTimeUpdate, seek])

  return (
    <video ref={videoEl} controls autoPlay className="h-full w-full"></video>
  )
}

export default memo(HlsPlayer)
