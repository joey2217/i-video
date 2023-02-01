// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// export const BASE_URL = 'https://jyzyapi.com/provide/vod'
export const BASE_URL = 'https://www.39kan.com/api.php/provide/vod/at/json'

export const CATEGORY = [
  {
    type_id: 1,
    type_name: '电影',
  },
  {
    type_id: 2,
    type_name: '电视',
  },
  {
    type_id: 3,
    type_name: '综艺',
  },
  {
    type_id: 4,
    type_name: '动漫',
  },
  {
    type_id: 5,
    type_name: '资讯',
  },
  {
    type_id: 6,
    type_name: '动作片',
  },
  {
    type_id: 7,
    type_name: '喜剧片',
  },
  {
    type_id: 8,
    type_name: '爱情片',
  },
  {
    type_id: 9,
    type_name: '科幻片',
  },
  {
    type_id: 10,
    type_name: '恐怖片',
  },
  {
    type_id: 11,
    type_name: '剧情片',
  },
  {
    type_id: 12,
    type_name: '战争片',
  },
  {
    type_id: 13,
    type_name: '国产剧',
  },
  {
    type_id: 14,
    type_name: '港台剧',
  },
  {
    type_id: 15,
    type_name: '日韩剧',
  },
  {
    type_id: 16,
    type_name: '欧美剧',
  },
  {
    type_id: 17,
    type_name: '公告',
  },
  {
    type_id: 18,
    type_name: '头条',
  },
  {
    type_id: 20,
    type_name: '电影资讯',
  },
  {
    type_id: 21,
    type_name: '电视资讯',
  },
  {
    type_id: 22,
    type_name: '综艺资讯',
  },
  {
    type_id: 23,
    type_name: '动漫资讯',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ category: CATEGORY, baseUrl: BASE_URL })
}
