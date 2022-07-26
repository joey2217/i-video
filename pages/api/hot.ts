// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BASE_URL } from './data'

// 动漫
const HOT_CARTOON = [22700]

const HOT = [HOT_CARTOON[0]]


function fetchList(ids: string) {
  return axios({
    url: BASE_URL,
    method: 'GET',
    params: {
      ac: 'detail',
      ids,
    },
  }).then((res) => {
    return res.data.list.map((item: any[]) => ({ ...item, vod_play_url: '' }))
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { includes = 'all' } = req.query
    if (includes === 'all') {
      const fetch = [fetchList(HOT.join()), fetchList(HOT_CARTOON.join())]
      const [hotList, hotCartoonList] = await Promise.all(fetch)
      res.status(200).json({ hotList, hotCartoonList })
    } else if (includes === 'cartoon') {
      const list = await fetchList(HOT_CARTOON.join())
      res.status(200).json(list)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
