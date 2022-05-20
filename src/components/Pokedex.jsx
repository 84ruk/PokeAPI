import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePokemon from '../hooks/usePokemon';
import { Error } from "./Error";
import { Pokemon } from "./Pokemon";
import { Spinner } from './Spinner';



export const Pokedex = () => {

  const { cargando, error, getInitialPokemons, hasMore, pokemon, setPaginaActual } = usePokemon();


  useEffect(() => {
    setTimeout(() => {
        getInitialPokemons();
    }, 700);
}, []);

  return (
    <>
        {cargando ? 
        <Spinner 

        /> :
         error ? 
          <Error />
          : 
          <InfiniteScroll
            dataLength={pokemon.length}
            hasMore={hasMore}
            loader={<Spinner/>}
            next={ () => {
              setPaginaActual(prevPag => prevPag + 20)
            } }
            className="flex flex-wrap justify-center w-full px-10 max-w-screen-2xl mx-auto"
          >
            <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">Pokedex</h1>

            {pokemon.map(pokemon => {
              return (
                  <Pokemon 
                    pokemon={pokemon}
                    key={pokemon.name} 
                  />
            )})}

          </InfiniteScroll>
        }  

    </>
  )
}
