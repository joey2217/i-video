// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BASE_URL } from './data'

function fetchList(type: string | number) {
  return axios({
    url: BASE_URL,
    method: 'GET',
    params: {
      ac: 'detail',
      t: type,
      limit: 8,
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
    //1 = 电视剧 2 =电影 17 =动漫 27 =综艺
    const fetch = [fetchList(20), fetchList(14), fetchList(24), fetchList(27)]
    const [tvList, movieList, cartoonList, varietyList] = await Promise.all(
      fetch
    )
    res.status(200).json({ tvList, movieList, cartoonList, varietyList })
  } catch (error) {
    res.status(500).send(error)
  }
}
