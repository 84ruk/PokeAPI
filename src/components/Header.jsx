import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";
import { Outlet, Link, useLocation } from 'react-router-dom';
export const Header = () => {

  const { setPokemon } = usePokemon();
  const location = useLocation();

  


  return (
    <>
        <header className="mt-5 h-28 flex-col w-full max-w-screen-2xl flex items-center md:flex-row justify-between px-11 mx-auto">
          <Link to={location.pathname == '/' ? `null` :  `/`}>
            <img 
              src='../src/assets/PokeLogo.png'
              className='h-10 object-contain cursor-pointer'
              alt='logo'
              onClick={() => 
                location.pathname == '/' ? null :  setPokemon([])
              }

              />
          </Link>
            <Search />


          </header>
          <Outlet />
    </>
  )
}
