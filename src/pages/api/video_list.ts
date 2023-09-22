import type { VideoResponse } from '@/types'
import { BASE_URL } from '@/utils/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

export const runtime = 'edge'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoResponse>
) {
  const { ids } = req.query
  console.log(ids)
  if (ids) {
    fetch(`${BASE_URL}?ac=detail&ids=${ids}`)
      .then((response) => response.json())
      .then((response) => {
        res.status(200).json(response as VideoResponse)
      })
      .catch((error) => {
        console.error(error)
        res.status(200).json({
          code: 500,
          msg: '',
          page: 1,
          pagecount: 0,
          limit: 20,
          total: 0,
          list: [],
          typeName: '',
        })
      })
  } else {
    res.status(200).json({
      code: 1,
      msg: '',
      page: 1,
      pagecount: 0,
      limit: 20,
      total: 0,
      list: [],
      typeName: '',
    })
  }
}
