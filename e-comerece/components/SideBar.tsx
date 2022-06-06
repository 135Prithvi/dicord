
import avatar1 from '../public/avatar-1.webp'
import avatar3 from '../public/avatar-3.webp'
import avatar4 from '../public/avatar-4.webp'
import avatar2 from '../public/avatar-2.png'
import { useEffect, useState } from 'react'
import RoomAvatar from './RoomAvatar'
import { useRouter } from 'next/router'
export default function SideBar() {

  const router = useRouter()
  const [channelsz, setChannelsz] = useState<any[]>([])

  useEffect( () => {
    dummychannels()
  }, [])

  const dummychannels = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getChannels`,
      )

      const data = await response.json()
      setChannels(data)

      router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
    } catch (error) {
      console.error(error)
    }
  }
  const [channels, setChannels] = useState<any[]>([])
  
    return <>
    <div className="fixed top-0 left-0 h-screen m-0 flex-col flex shadow-xl blur-0 bg-gray-900 text-white w-16 ">
    {channels.map((channel, index) => {
          return <RoomAvatar
            key={index}
            id={channel.roomId}
            avatar={channel.avatar}
            name={channel.roomName}
          />
        })}
      </div>
      </>
  }