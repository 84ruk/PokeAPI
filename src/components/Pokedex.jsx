import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePokemon from '../hooks/usePokemon';
import { Error } from "./Error";
import { Pokemon } from "./Pokemon";
import { Spinner } from './Spinner';



export const Pokedex = () => {
  
  const { cargando, error, getInitialPokemons, hasMore, pokemon, setPaginaActual, setCargando, setHasMore, setPokemon } = usePokemon();

  useEffect(() => {
    setPokemon([]);
    setCargando(true);
    setTimeout(() => {
      getInitialPokemons();
      setCargando(false);
    }, 900);
    setHasMore(true);

}, []);

  return (
    <>
        {pokemon.length > 2 ? cargando ? 
          <Spinner/> :
         error ? 
          <Error />
          : 
          <>
            <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">Pokedex</h1>
            <InfiniteScroll
              dataLength={pokemon.length}
              hasMore={hasMore}
              loader={<Spinner/>}
              next={ () => {
                setPaginaActual(prevPag => prevPag + 20)
              } }
              className="flex flex-wrap justify-center w-full px-10 max-w-screen-2xl mx-auto overflow-hidden"
            >

              {pokemon.map(pokemon => {
                return (
                    <Pokemon 
                      pokemon={pokemon}
                      key={pokemon.name} 
                    />
                    )})}
              </InfiniteScroll>
            </>
            : <Spinner />}  

    </>
  )
}
