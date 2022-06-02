import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useRef } from 'react'

export default function Search() {
  const search = useRef<HTMLInputElement>(null!)

  return (
    <>
      <div className="container   ">
        <form
          className="mt-5 flex "
          onSubmit={(e: any) => {
            e.preventDefault()
          }}
        >
          <input
            className=" max-w-sm rounded-lg border-2 sm:w-full"
            type="search"
            placeholder="Search"
            ref={search}
          />
          <button className="mx-4 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-[0.33rem] text-center text-lg  font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 sm:py-2.5 sm:px-2">
            <SearchIcon />
          </button>
        </form>
      <div>{/* showModal Will go here */}</div>
      </div>
    </>
  )
}
