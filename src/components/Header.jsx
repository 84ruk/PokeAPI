import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";


export const Header = () => {
    const { setPaginaActual, paginaActual, paginaMenos, paginaMas } = usePokemon();

   

  return (


    <div className="h-28 w-full mb-10 max-w-screen-2xl mx-auto ">
        <header className="h-28 flex justify-between items-center px-10 ">
        
{/*             <div className="flex w-1/3 hover:scale-110 ease-in duration-200 ">
              <button 
                className='py-2 px-4'

                onClick={() => {
                  paginaMenos();
                }}
              >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 hover:cursor-pointer" 
                fill="none" viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
                
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M7 16l-4-4m0 0l4-4m-4 4h18" 
                />
              </svg>
              </button>
            </div> */}

            <Search />

{/*            <div 
            className='w-1/3 flex justify-end hover:scale-110 ease-in duration-200'
           >
            <button
                className="py-2 px-4 "
                onClick={() => {
                  paginaMas();
                }}
              >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-7 w-7 hover:cursor-pointer"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
              </button>
            </div> */}
          </header>

    </div>
  )
}
