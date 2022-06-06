import { client } from '../../lib/client'

export default async (req: { body: { userAddress: any } }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: unknown): void; new(): any } } }) => {
  const { userAddress } = req.body

  const conversationDoc = {
    _type: 'conversations',
    _id: `${userAddress}-dm`,
    isDm: true,
    roomId: userAddress,
    userReference: {
      _key: userAddress,
      _ref: `${userAddress}-user`,
      _type: 'reference',
    },
  }

  try {
    await client.createIfNotExists(conversationDoc)

    res.status(200).send('Successful')
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}