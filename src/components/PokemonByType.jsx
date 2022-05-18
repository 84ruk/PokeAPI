import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "./Pokemon";
import { toUpperCase } from "../helpers";
import { Error } from "./Error";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "./Spinner";

export const PokemonByType = () => {

  const { type } = useParams();

  const { error, getPokemonByType, busqueda, pokemon, cargando, filtroActual} = usePokemon();

   useEffect(() => {
    getPokemonByType(type);
  }, [])  
  
//Error si abro en otra pestana el filtro y otro error es que guarada los pokmones del filltro anterior
  return (
    <div>
      {error ? <Error /> 
      : cargando ? <Spinner />
      :
      <InfiniteScroll
      dataLength={pokemon.length}
      loader={<Spinner/>}
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

      
    </div>
  )
}
