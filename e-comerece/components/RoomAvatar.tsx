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
          className="cursor-pointer rounded-3xl transition-all duration-300 ease-linear hover:rounded-xl"
        />
        <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
          {name}
        </span>
      </div>
    </>
  )
}
