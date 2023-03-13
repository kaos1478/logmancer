import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '@/utils/connection'
import { IResponseFuncs } from '@/utils/types'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET'],
  origin: '*'
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors)

  const method: keyof IResponseFuncs = req.method as keyof IResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: IResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Log } = await connect()
      const { userId } = req.query
      const logs = await Log.find({ userId }).catch(catcher)
      res.json(logs)
    },

    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Log } = await connect()
      res.json(await Log.create(req.body).catch(catcher))
    }
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
