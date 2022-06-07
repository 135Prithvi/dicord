import { useState } from 'react'
import Image from 'next/image'
export default function MessageCard({
  avatar,
  sender,
  timestamp,
  content,
  time,
}: any) {
  const [hi, sethi] = useState()
  return (
    <div className={`mb-5 flex`}>
      <div className={`mr-5`}>
        <Image
          height={40}
          width={40}
          src={
            avatar ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
          }
          className={`rounded-full`}
          alt={sender}
        />
      </div>

      <div>
        <div className={`flex items-center `}>
          <p className={`mr-2.5`}>{sender}</p>
          <small className={`opacity-40`}>
            {timestamp} {time}
          </small>
        </div>
        <p className={`max-w-3xl text-white`}>{content}</p>
      </div>
    </div>
  )
}
