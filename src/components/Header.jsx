import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Spinner } from './Spinner';
import Logo from '../assets/PokeLogo.png';


export const Header = () => {

  const { setPokemon, types, handleClickType } = usePokemon();
  const location = useLocation();
  

const typesConfig = {
  // Colors
  normal: {
    typeColor: 'bg-neutral-500',
  },
  grass: {
    typeColor: 'bg-green-400',
  },
  poison: {
    typeColor: 'bg-lime-600',
  },
  fire: {
    typeColor: 'bg-amber-400'
  },
  flying: {
    typeColor: 'bg-blue-400',
  },
  water: {
    typeColor: 'bg-blue-400',
  },
  bug: {
    typeColor: 'bg-neutral-500',
  },
  ground: {
    typeColor: 'bg-stone-500',
  },
  electric: {
    typeColor: 'bg-amber-300',
  },
  fairy: {
    typeColor: 'bg-pink-400',
  },
  fighting: {
    typeColor: 'bg-neutral-500',
  },
  psychic: {
    typeColor: 'bg-amber-500',
  },
  rock: {
    typeColor: 'bg-stone-600',
  },
  steel: {
    typeColor: 'bg-stone-500',
  },
  ice: {
    typeColor: 'bg-blue-300',
  },
  ghost: {
    typeColor: 'bg-gray-400',
  },
  dragon: {
    typeColor: 'bg-orange-400',
  },
  dark: {
    typeColor: 'bg-neutral-600',
  },
  unknow: {
    typeColor: 'bg-neutral-400',
  },
};  // End of colorConfig

  return (
      <div className=' bg-white'>
            <header className="mt-5 h-28 flex-col w-full max-w-screen-2xl flex items-center md:flex-row justify-between px-11 mx-auto sticky top-0 z-30 w-100 h-100 bg-white">
              <Link to={location.pathname == '/' ? `null` :  `/`}>
                <img 
                  src={Logo}
                  className='h-10 object-contain cursor-pointer'
                  alt='logo'
                  onClick={() => 
                    location.pathname == '/' ? null :  setPokemon([])
                  }
                  
                  />
              </Link>
                <Search />


              </header>
              <div className="flex justify-between items-center w-auto mx-auto sticky top-28 z-30 overflow-x-scroll bg-white max-w-screen-2xl xl:overflow-x-auto">
                { types.map(type => {
                  return(
                    <button onClick={() => {handleClickType(type), setPokemon([])}} key={type} 
                    className={`my-1 inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 hover:cursor-pointer hover:scale-110 ease-in duration-200 text-white ${typesConfig[type].typeColor}`}>
                                {type}
                            </button>
                        )
                      }
                      )}

              </div>
                
              <Outlet />
        </div>
      
  )
}
