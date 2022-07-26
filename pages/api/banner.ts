// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// 动漫
const HOT_CARTOON = [
  {
    id: 22700,
    name: '海贼王',
    banner:'',
    intro:'',
  },
]

const HOT = [HOT_CARTOON[0]]

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
