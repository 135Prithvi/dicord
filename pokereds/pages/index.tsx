import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
const Home: NextPage = ({data}:any) => {
  
  
  return (
    <div className="mx-10 sm:mx-20">
      <div className="my-10 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-4  sm:gap-y-5 sm:space-y-0">
      {data.results.map((pokemon:any , _index: any) => {
            return <Link href="/[id]" as={`/${_index+1}`} key={pokemon?.name}><div className=" cursor-pointer max-w-sm rounded-lg border-2 border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a >
              <Image
                className="rounded-lg m-auto "
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_index+1}.png`}
                 alt=""
                 width={`120`}
                 height={`120`}
              />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {pokemon?.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              
            </div>
          </div></Link>
         })}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(_context: any) {
  
  const URL = `https://pokeapi.co/api/v2/pokemon/`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.results);
  
  return {props: {data}}
}
