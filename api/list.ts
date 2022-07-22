import axios from 'axios'
import sources from './data'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  const { sid = '1', pg = '1' } = request.query
  const sourceId = Number(sid) || 1
  const source = sources.find((s) => s.id === sourceId)
  if (source) {
    const { api } = source
    axios({
      url: api,
      method: 'GET',
      params: {
        ...request.query,
        pg,
        ac: 'videolist',
      },
    })
      .then((res) => {
        response.status(200).json(res.data)
      })
      .catch((error) => {
        response.status(500).json(error)
      })
  } else {
    response.status(400).send(`error param sid:${sid}`)
  }
}
