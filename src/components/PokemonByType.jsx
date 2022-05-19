import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "./Pokemon";
import { toUpperCase } from "../helpers";
import { Error } from "./Error";
import { Spinner } from "./Spinner";

export const PokemonByType = () => {

  const { type } = useParams();

  const { error, pokemon, cargando, filtroActual} = usePokemon(); 

  console.log('Filtro: ' + type)

  return (
    <div>
      {error ? <Error /> 
      : cargando ? <Spinner />
      :
        <div>
          <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">{filtroActual == 'Pokedex' ? null : 'Pokedex -'} {filtroActual}</h1>
          {pokemon.map(pokemon => (
            <Pokemon 
              key={pokemon.id} 
              pokemon={pokemon} 
            />
          ))}
        </div>
      }

      </div>
  )
}
