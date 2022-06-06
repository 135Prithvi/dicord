import { client } from '../../lib/client'

export default async (req: { query: { account: any } }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: unknown): void; new(): any } } }) => {
  const query = `*[_type == "users" && walletAddress == "${req.query.account}"]{
    name,
    "avatar": profileImage.asset->url
  }`

  try {
    const sanityResponse = await client.fetch(query)
    
    res.status(200).send(await sanityResponse[0])
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}