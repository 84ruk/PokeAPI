import { useContext, useState } from "react";
import usePokemon from '../hooks/usePokemon';
import { Error } from "./Error";
import { Pokemon } from "./Pokemon";
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export const Pokedex = () => {

  const { pokemon, busqueda, filtroActual, error, setPaginaActual, paginaActual, hasMore } = usePokemon();

  return (
    <div className="px-10 flex flex-col max-w-screen-2xl mx-auto w-full">

      

        {error ? 
          <Error />
          : 
          <InfiniteScroll
            dataLength={pokemon.length}
            hasMore={hasMore}
            loader={<Spinner/>}
            next={ () => {
              setPaginaActual(prevPag => prevPag + 20)
            } }
            className="flex flex-wrap justify-center w-auto h-auto"
          >
            <h1 className=" text-3xl font-semibold text-center my-3 w-full overscroll-contain">{filtroActual == 'Todos' ? null : 'Pokedex -'} {filtroActual}</h1>

            {pokemon.map(pokemon => {
              return (
                  <Pokemon 
                    pokemon={pokemon}
                    key={pokemon.name} 
                  />
            )})}

          </InfiniteScroll>
        }  

    </div>
  )
}
