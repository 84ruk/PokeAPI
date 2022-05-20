import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "./Pokemon";
import { toUpperCase } from "../helpers";
import { Error } from "./Error";
import { Spinner } from "./Spinner";

export const PokemonByType = () => {

  const { type } = useParams();

  const { cargando, error, filtroActual, getPokemonByType, pokemon} = usePokemon(); 

  useEffect(() => {
    getPokemonByType(type);
  }, [])
  

  return (
    <div>
      {error ? <Error /> 
      : cargando ? <Spinner />
      :
        <div className="flex flex-wrap justify-center w-full px-10 max-w-screen-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">{filtroActual == 'Pokedex' ? null : 'Pokedex -'} {filtroActual}</h1>
          {pokemon.map(pokemon => (
            <Pokemon 
              key={pokemon.id} 
              pokemon={pokemon} 
              type={type}
            />
          ))}
        </div>
      }

      </div>
  )
}
