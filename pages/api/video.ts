// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BASE_URL } from './data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type, page = 1, size = 20, keyword, h, ids } = req.query
  axios({
    url: BASE_URL,
    method: 'GET',
    params: {
      ac: 'detail',
      t: type,
      pg: page,
      wd: keyword,
      limit: size,
      h,
      ids
    },
  })
    .then((response) => {
      res.status(200).json({ ...response.data })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
