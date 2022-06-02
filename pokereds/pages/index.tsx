import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Search from '../components/Search'
const Home: NextPage = ({data}:any) => {
 
  
  return (
    <div className="mx-10 sm:mx-20">
      <div className="container">   
      <Search/>
      </div>
      <div className="my-5 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-8  sm:gap-y-5 sm:space-y-0">
      {data.results.map((pokemon:any , _index: any) => {
            return <Link href="/[id]" as={`/${_index+1}`} key={pokemon?.name}><div className=" cursor-pointer max-w-full rounded-lg border-2 border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a >
              <Image
                className="rounded-lg m-auto "
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_index+1}.png`}
                 alt=""
                 width={`120`}
                 height={`120`}
              />
            </a>
            <div className="pb-5 pr-5 pl-5">
              <a>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {pokemon?.name}
                </h5>
              </a>
              
              
            </div>
          </div></Link>
         })}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(_context: any) {
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=494`
  const response = await fetch(URL)
  const data = await response.json()
  return {props: {data}}
}
