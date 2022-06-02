import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import ReactDOM from 'react-dom'

export const Chat = () => {
  const { data: session } = useSession()
  const [msg , setMsg ] = useState("")
  if (session) {
    const onSubmit = async function (e: { preventDefault: () => void; } ) {
      e.preventDefault()
      
    }
    return (
      <>
        <main className=" text-center sm:mx-36 text-2xl ">
          Hi {session.user.name}
          <div className="">
            <form className="fixed bottom-0 flex " onSubmit={onSubmit}>
              <div className="mb-6  justify-center  ">
                <label
                  htmlFor="email"
                  
                  
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                value={msg}
                onChange={(e: { target: { value: React.SetStateAction<string> } })=>setMsg(e.target.value)}
                onKeyPress={(e)=>{if (e.key === 'Enter') {
                 const chast = React.createElement('div',{},{msg});console.log("Hi")
                 ReactDOM.render(
                  container,
                  document.getElementById('global')
                )
               } 
              }}  
                type="text"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  
                />
              </div>
              
              
              <button
                type="submit"
                className="w-full mx-2 px-2 py-1 my-9 rounded-lg bg-blue-700  text-center text-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Submit
              </button>
            </form>
            </div>
        </main>
      </>
    )
  }
  if (!session) {
    return (
      <main className="mx-5 mt-10 items-center    justify-around text-center text-2xl sm:w-full ">
        <p className="font-sans text-xl font-bold text-black">Not signed in</p>{' '}
        <br />
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </main>
    )
  }
}
