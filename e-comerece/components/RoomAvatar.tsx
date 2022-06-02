import Image from 'next/image'
import { useRouter } from 'next/router'

export default function RoomAvatar({ id, avatar, name }: any) {
  const router = useRouter()
  function changeuri() {
    router.push(`?channel=${id}&name=${name}`)
  }
  return (
    <>
      <div
        className="group relative mx-auto my-2 flex h-12 w-12 items-center justify-center  "
        onClick={changeuri}
      >
        <Image
          src={avatar}
          width={48}
          height={48}
          alt={name}
          className="rounded-3xl duration-300 ease-linear cursor-pointer hover:rounded-xl transition-all"
        />
        <span className="group-hover:scale-100 absolute w-auto rounded-md transition-all duration-100 p-2 m-2 min-w-max shadow-md text-white bg-gray-900 font-bold text-xs scale-0 origin-left left-14">{name}</span>
      </div>
    </>
  )
}
