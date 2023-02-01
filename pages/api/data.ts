// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export const BASE_URL = 'https://jyzyapi.com/provide/vod/at/json'
// export const BASE_URL = 'https://www.39kan.com/api.php/provide/vod/at/json'

export const CATEGORY = [
  {
    type_id: 1,
    type_pid: 0,
    type_name: '电视剧',
  },
  {
    type_id: 2,
    type_pid: 0,
    type_name: '电影',
  },
  {
    type_id: 3,
    type_pid: 1,
    type_name: '欧美剧',
  },
  {
    type_id: 4,
    type_pid: 1,
    type_name: '香港剧',
  },
  {
    type_id: 5,
    type_pid: 1,
    type_name: '韩剧',
  },
  {
    type_id: 6,
    type_pid: 1,
    type_name: '日剧',
  },
  {
    type_id: 7,
    type_pid: 1,
    type_name: '马泰剧',
  },
  {
    type_id: 8,
    type_pid: 0,
    type_name: '伦理片',
  },
  {
    type_id: 9,
    type_pid: 2,
    type_name: '动作片',
  },
  {
    type_id: 10,
    type_pid: 2,
    type_name: '爱情片',
  },
  {
    type_id: 11,
    type_pid: 2,
    type_name: '喜剧片',
  },
  {
    type_id: 12,
    type_pid: 2,
    type_name: '科幻片',
  },
  {
    type_id: 13,
    type_pid: 2,
    type_name: '恐怖片',
  },
  {
    type_id: 14,
    type_pid: 2,
    type_name: '剧情片',
  },
  {
    type_id: 15,
    type_pid: 2,
    type_name: '战争片',
  },
  {
    type_id: 16,
    type_pid: 2,
    type_name: '记录片',
  },
  {
    type_id: 17,
    type_pid: 0,
    type_name: '动漫',
  },
  {
    type_id: 20,
    type_pid: 1,
    type_name: '内地剧',
  },
  {
    type_id: 23,
    type_pid: 2,
    type_name: '动画片',
  },
  {
    type_id: 24,
    type_pid: 17,
    type_name: '中国动漫',
  },
  {
    type_id: 25,
    type_pid: 17,
    type_name: '日本动漫',
  },
  {
    type_id: 26,
    type_pid: 17,
    type_name: '欧美动漫',
  },
  {
    type_id: 27,
    type_pid: 0,
    type_name: '综艺',
  },
  {
    type_id: 28,
    type_pid: 1,
    type_name: '台湾剧',
  },
  {
    type_id: 29,
    type_pid: 0,
    type_name: '体育赛事',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ category: CATEGORY, baseUrl: BASE_URL })
}
