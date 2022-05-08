import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";


export const Header = () => {
    const { setPaginaActual, paginaActual } = usePokemon();

  return (
    <div className="h-28 w-full mb-10">
        <header className="h-28 w-full flex justify-between items-center px-10 ">
            <div>
              <img 
                src='../assets/PokeLogo.png' 
                alt='PokeLogo'
              />
            </div>

          <Search />
        </header>
        <div className="flex w-full justify-between px-10">
          
            <button 
              className="py-2 px-4"
              onClick={() => {
                setPaginaActual(paginaActual - 10);
              }}
            >
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 hover:cursor-pointer hover:text-indigo-500" 
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
            
          
            <button
              className="py-2 px-4"
              onClick={() => {
                setPaginaActual(paginaActual + 10);
              }}
            >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-7 w-7 hover:cursor-pointer hover:text-indigo-500"
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
          
        </div>
    
    </div>
  )
}
