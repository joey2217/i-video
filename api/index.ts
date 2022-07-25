import type { Params, VideoResponse, Video } from '../types'
import request from '../utils/request'

export function fetchList(params?: Partial<Params>) {
  return request({
    url: '/list',
    method: 'GET',
    params,
  }).then((res) => {
    return res.data as VideoResponse
  })
}

export function fetchVideo(id: number|string, params?: Partial<Params>) {
  return request({
    url: '/video',
    method: 'GET',
    params: {
      ...params,
      ids: id,
    },
  }).then((res) => {
    const { list } = res.data
    if (list.length > 0) {
      return list[0] as Video
    }
    throw new Error(`不存在ID为${id}数据`)
  })
}
