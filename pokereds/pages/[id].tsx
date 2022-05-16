import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
const PokePage = ({data ,pid}:any) => {
 

  return (
    <>
      <div className=" m-auto sm:max-w-lg  my-14 sm:my-16 place-items-center space-y-10">

        <a className="text-md mx-2   mb-1 sm:block rounded-lg   py-5  px-5 pr-4 pl-3 text-center font-medium  border-2  border-gray-200 bg-white  shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="mx-auto   sm:inline-flex sm:w-full ">
            <Image
              className="m-auto h-1/2 w-1/2 sm:h-max sm:w-max  rounded-t-lg"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pid ? pid : ''
              }.png`}
              alt=""
               width={`120`}
              height={`120`}
            />
            <ArrowForwardIcon className="my-auto " />
            <Image
              className="m-auto h-1/2 w-1/2 sm:h-max sm:w-max rounded-t-lg"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
                pid ? pid : ''
              }.png`}
              alt=""
               width={`120`}
              height={`120`}
            />
            <ArrowForwardIcon className="my-auto " />
            <Image
              className="m-auto h-1/2 w-1/2 sm:h-max sm:w-max rounded-t-lg"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                pid ? pid : ''
              }.png`}
              alt=""
               width={`120`}
              height={`120`}
            />
            <ArrowForwardIcon className="my-auto" />
            <Image
              className="m-auto h-1/2 w-1/2 sm:h-max sm:w-maxrounded-t-lg"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
                pid ? pid : ''
              }.png`}
              alt=""
               width={`120`}
              height={`120`}
            />
          </div>
        
        <div className="py-5">
          <a className="mr-auto ml-auto w-full text-center ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {(data.name ? data.name : '').toUpperCase()}
            </h5>

            <p className=" mb-3 font-medium text-gray-700 dark:text-gray-400">
              Height : {data.height}
              <br />
              Weight : {data.weight}
              <br />
            </p>
          </a>
        </div>
        </a>
      </div>
    </>
  )
}
export default PokePage

export async function getServerSideProps(_context: any) {
  const pid = _context.query.id
  const URL = `https://pokeapi.co/api/v2/pokemon/${pid}`
  const response = await fetch(URL)
  const data = await response.json()
  return {props: {data,pid}}
}