import { client } from '../../lib/client'

const query = `*[_type == "conversations" && isDM==false]{
  roomId,
  roomName,
  "avatar": image.asset->url
}`

export default async (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: unknown): void; new(): any } } }) => {
  try {
    const sanityResponse = await client.fetch(query)

    res.status(200).send(sanityResponse)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}