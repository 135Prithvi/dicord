import { client } from '../../lib/client'

export default async (
  req: { body: { userAddress: any; name: any } },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      send: { (arg0: unknown): void; new (): any }
    }
  }
) => {
  const { userAddress, name } = req.body

  const userDoc = {
    _type: 'users',
    _id: `${userAddress}-user`,
    name: name,
    walletAddress: userAddress,
  }

  try {
    await client.createIfNotExists(userDoc)

    res.status(200).send('Successful')
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}
