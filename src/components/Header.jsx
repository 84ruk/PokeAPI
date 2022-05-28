import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";
<<<<<<< HEAD


export const Header = () => {

  const { setBusqueda, setError, setAlerta, setPaginaActual, getInitialPokemons, setHasMore, setFiltroActual } = usePokemon();

  return (
        <header className="mt-5 h-36  flex-col w-full max-w-screen-2xl flex items-center md:flex-row justify-between px-11 mx-auto">
            <img 
              src='./src/assets/PokeLogo.png'
              className='h-12 object-contain cursor-pointer'
              alt='logo'
              onClick={() => {
                setError(false);
                setAlerta('');
                setBusqueda('');
                setPaginaActual(0);
                getInitialPokemons();
                setHasMore(true);
                setFiltroActual('Pokedex');

              }}
            />
            <Search />

          </header>
=======
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
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
  )
}
