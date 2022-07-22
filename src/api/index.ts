import { Category, ListResult, Video } from '../types'
import { getLocalSourceId } from '../utils'
import request from '../utils/request'

export function fetchList(page: number = 1, wd: string = '', type?: number) {
  let t
  if (type != null && type !== -1) {
    t = type
  }
  const sourceId = getLocalSourceId()
  return request({
    url: '/list',
    method: 'GET',
    params: {
      sid: sourceId,
      pg: page,
      t,
      wd,
    },
  }).then((res) => {
    return res.data as ListResult
  })
}

export function fetchCategory() {
  const sourceId = getLocalSourceId()
  return request({
    url: '/category',
    method: 'GET',
    params: {
      sid: sourceId,
    },
  }).then((res) => {
    return res.data.class as Category[]
  })
}

export function fetchVideo(vid: number) {
  const sourceId = getLocalSourceId()
  return request({
    url: '/video',
    method: 'GET',
    params: {
      sid: sourceId,
      ids: vid,
    },
  }).then((res) => {
    const { list } = res.data
    if (list.length > 0) {
      return list[0] as Video
    }
    throw new Error(`不存在ID为${vid}数据`)
  })
}
