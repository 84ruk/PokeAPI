import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";
import { Outlet, Link } from 'react-router-dom';
export const Header = () => {

  const { setAlerta, setBusqueda, setError, setFiltroActual, setHasMore, setPaginaActual, getInitialPokemons } = usePokemon();

  return (
        <header className="mt-5 h-36  flex-col w-full max-w-screen-2xl flex items-center md:flex-row justify-between px-11 mx-auto">
          <Link to={'/'}>
            <img 
              src='./src/assets/PokeLogo.png'
              className='h-12 object-contain cursor-pointer'
              alt='logo'
              onClick={() => {
                setAlerta('');
                setBusqueda('');
                setError(false);
                setFiltroActual('Pokedex');
                setHasMore(true);
                setPaginaActual(0);
                getInitialPokemons();

              }}
            />
          </Link>
            <Search />

            <Outlet />

          </header>
  )
}
