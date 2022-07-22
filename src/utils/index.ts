import { Video } from '../types'
import { SOURCES } from './constants'

const LOCAL_SOURCE_ID = 'local_source_id'

export function getLocalSourceId() {
  const val = localStorage.getItem(LOCAL_SOURCE_ID)
  if (val) {
    return Number(val)
  }
  return SOURCES[0].id
}

export function setLocalSourceId(id: number) {
  localStorage.setItem(LOCAL_SOURCE_ID, id.toString())
}

const separator = '$$$'
export function parseVideoPlayUrl(video: Video) {
  const { vod_play_from: playFrom, vod_play_url: playUrl } = video
  const options = playFrom.split(separator).map((item, index) => ({
    value: index,
    label: `线路${index + 1}`,
    content: item,
  }))
  const blocks = playUrl.split(separator).map((item) =>
    item
      .split('#')
      .map((part) => {
        const [name, url] = part.split('$')
        return { name, url }
      })
      .reverse()
  )
  return {
    options,
    blocks,
  }
}
