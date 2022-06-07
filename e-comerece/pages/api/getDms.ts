import { client } from '../../lib/client'

const query = `*[_type == "conversations"  && isDM==true]{
  "conversation": userReference->{
    name,
    walletAddress,
    "image": profileImage.asset->url
  }
}`

export default async (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      send: { (arg0: unknown): void; new (): any }
    }
  }
) => {
  try {
    const sanityResponse = await client.fetch(query)

    const response = sanityResponse.map(
      (item: {
        conversation: { image: any; name: any; walletAddress: any }
      }) => {
        return {
          avatar: item.conversation.image,
          name: item.conversation.name,
          id: item.conversation.walletAddress,
        }
      }
    )

    res.status(200).send(response)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}
