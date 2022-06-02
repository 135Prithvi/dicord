import Image from 'next/image'
import { useRouter } from 'next/router'

export default function DmCard({ id, avatar, name }: any) {
  const router = useRouter()
  function changeuri() {
    router.push(`?channel=${id}&name=${name}`)
  }
  return (
    <>
      <div
        className="group relative my-2 mx-2 h-12 w-12 justify-start "
        onClick={changeuri}
      >
        <Image
          src={avatar}
          width={48}
          height={48}
          alt={name}
          className="cursor-pointer rounded-3xl transition-all duration-300 ease-linear hover:rounded-xl"
        />
        <span className=" absolute left-14  m-2 w-auto min-w-max  origin-left  p-2 text-xs font-bold text-gray-500">
          {name}
        </span>
      </div>
    </>
  )
}
