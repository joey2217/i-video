// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BASE_URL, CATEGORY } from './data'

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
      ids,
    },
  })
    .then((response) => {
      let typeName = '全部'
      if (type) {
        const typeId = Number(type)
        const cate = CATEGORY.find((c) => c.type_id === typeId)
        if (cate) {
          typeName = cate.type_name
        }
      }
      res.status(200).json({ ...response.data, typeName })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
