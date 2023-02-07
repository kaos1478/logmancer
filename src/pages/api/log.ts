import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '@/utils/connection'
import { IResponseFuncs } from '@/utils/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof IResponseFuncs = req.method as keyof IResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: IResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Log } = await connect()
      res.json(await Log.find({}).catch(catcher))
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
