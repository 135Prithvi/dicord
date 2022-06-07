import { useEffect, useState } from 'react'
import RoomAvatar from './RoomAvatar'
import { useRouter } from 'next/router'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import createdm from './createdm';
export default function SideBar() {
  const router = useRouter()

  useEffect(() => {
    dummychannels()
  }, [])

  const dummychannels = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getChannels`
      )

      const data = await response.json()
      setChannels(data)

      router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
    } catch (error) {
      console.error(error)
    }
  }
  
  const [channels, setChannels] = useState<any[]>([])

  return (
    <>
      <div className="fixed top-0 left-0 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-xl blur-0 ">
        {channels.map((channel, index) => {
          return (
            <RoomAvatar
              key={index}
              id={channel.roomId}
              avatar={channel.avatar}
              name={channel.roomName}
            />
          )
        })}
        <>
      <button
        className="group relative mx-auto my-2 flex h-12 w-12 items-center justify-center  "
        
      >
        <Image
          src={"https://img.icons8.com/ios-filled/100/add--v1.png"}
          width={48}
          height={48}
          alt={"name"}
          className="cursor-pointer filter rounded-3xl opacity-60 hover:rounded-xl"/>
        
      </button>
    </>
      </div>
    </>
  )
}
