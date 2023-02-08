import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.body.user === 'kaos1478' &&
    req.body.password === 'bolinhodearroz001'
  ) {
    res.json({})
  } else {
    res.status(400).json({ error: 'No No NO' })
  }
}

export default handler
