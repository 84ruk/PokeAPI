import usePokemon from '../hooks/usePokemon';
import { Error } from "./Error";
import { Pokemon } from "./Pokemon";
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export const Pokedex = () => {

  const { pokemon, busqueda, filtroActual, error, setPaginaActual, paginaActual, hasMore, cargando } = usePokemon();

  return (
    <>

      {console.log('nono')}

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
            <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">{filtroActual == 'Pokedex' ? null : 'Pokedex -'} {filtroActual}</h1>

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
