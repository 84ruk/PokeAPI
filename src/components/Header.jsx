import usePokemon from '../hooks/usePokemon';
import { Search } from "./Search";


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
  )
}
