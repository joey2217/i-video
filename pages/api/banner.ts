// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// 动漫
const HOT_CARTOON = [
  {
    id: 22700,
    name: '海贼王',
    banner:'/22700.webp',
    intro:'草帽路飞伟大冒险',
  },
  {
    id: 15967,
    name: '间谍过家家',
    banner:'/15967.webp',
    intro:'非凡一家绝密生活',
  },
]

const HOT = HOT_CARTOON

// function getRandomInt(m: number,n=0){
//   return Math.floor(Math.random() * (m-n)) + n;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { includes = 'index' } = req.query
    if (includes === 'all') {
      res.status(200).json(HOT)
    } else if (includes === 'cartoon') {
      res.status(200).json(HOT_CARTOON)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
