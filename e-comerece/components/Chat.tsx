import friends from '../public/icons/friends.svg'
import nitro from '../public/icons/nitro.svg'
import Image from 'next/image'
import avatar1 from '../public/avatar-1.webp'
import avatar3 from '../public/avatar-3.webp'
import avatar4 from '../public/avatar-4.webp'
import avatar2 from '../public/avatar-2.png'
import { useEffect, useState } from 'react'
import DmCard from './DmCard'

export default function Chat() {
  const [dm, setdm] = useState<any[]>([]);

  useEffect(()=>{dummydms()})

  async function dummydms() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/getDms`,
    )

 
    setdm(await response.json())
  }
  
  
  return (
    <>
      <div
        className="m-0 ml-16 h-screen w-full max-w-[13rem]  overflow-hidden px-2.5 bg-[#36393f]
     "
      >
        <div className="flex p-2.5 mb-2 justify-center">
          <input
            type="search"
            placeholder="Find or start a conversation"
           onClick={(e)=>{e.preventDefault()}}
            className="max-w-[12rem]  mt-1.5 rounded-lg"
           />
        </div>
        <div className="z-10 mb-4 flex w-full items-center justify-between p-2.5 hover:bg-gray-600 hover:text-gray-400 text-gray-500">
          <div className="mr-2.5 flex border-gray-600">
            <Image src={friends} width={24} height={24} className="text-white" />
            <p className="ml-4   blur-0 ">Friends</p>
          </div>
        </div>
        <div className="z-10 mb-4 flex w-full items-center justify-between p-2.5 hover:bg-gray-600 hover:text-gray-400 text-gray-500 ">
          <div className="mr-2.5 flex border-gray-600">
            <Image src={nitro} width={24} height={24} className="text-white" />
            <p className="ml-4  blur-0 ">Nitro</p>
          </div>
        </div>
        <div className="grid justify-self-start ml-1 items-center text-slate-500 font-bold font-sans ">
          <p> Direct Message</p> </div>
          {dm.map((dm: { name: any; id: any; avatar: any }, index: any) => {
            return <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={dm.avatar ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
            }

            />
            })}
       
      </div>
    </>
  )
}
