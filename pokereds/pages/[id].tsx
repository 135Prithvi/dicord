import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
const PokePage = ({data ,pid}:any) => {
  return (
    <>
      <div className=" sm:m-auto mx-14 sm:max-w-lg max-w-xs my-16 sm:my-16 place-items-center ">

        <a className="text-md mx-2 mb-1 sm:block block rounded-lg py-5 px-5 pr-4 pl-3 text-center font-medium  border-2  border-gray-200 bg-white  shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="mx-auto sm:inline-flex flex sm:w-full ">
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
               width={`150`}
              height={`150`}
            />
          </div>
        
        <div className="pt-3">
          <a className="mr-auto ml-auto w-full text-center ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {(data.name ? data.name : '').toUpperCase()}
            </h5>

            <p className="  font-medium text-gray-700 dark:text-gray-400">
              Height : {data.height} <strong>m</strong>
              <br />
              Weight : {data.weight} <strong>Kgs</strong>
              <br />
              Ability : 
              
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
  const URL = `${process.env.GET_ONE_PokeApi}${pid}`
  const response = await fetch(URL)
  const data = await response.json()
  // console.log(data);
  
  return {props: {data,pid}}
}