
import avatar1 from '../public/avatar-1.webp'
import avatar3 from '../public/avatar-3.webp'
import avatar4 from '../public/avatar-4.webp'
import avatar2 from '../public/avatar-2.png'
import { useState } from 'react'
import RoomAvatar from './RoomAvatar'
export default function SideBar() {
  const dummychannels = [
    {
      id: 1,
      name: 'dummy1',
      avatar: avatar1,
    },
    {
      id: 2,
      name: 'dummy3',
      avatar: avatar2,
    },
    {
      id: 3,
      name: 'dummy2',
      avatar: avatar3,
    },
    {
      id: 4,
      name: 'cp',
      avatar: avatar4,
    },
  ]
  const [channels, setChannel] = useState(dummychannels)
  console.log();
  
    return <>
    <div className="fixed top-0 left-0 h-screen m-0 flex-col flex shadow-xl blur-0 bg-gray-900 text-white w-16 ">
    {channels.map((channel, index) => {
      
          return <RoomAvatar
            key={index}
            id={channel.id}
            avatar={channel.avatar}
            name={channel.name}
          />
        })}
      </div>
      </>
  }