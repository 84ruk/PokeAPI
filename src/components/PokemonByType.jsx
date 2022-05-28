import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "./Pokemon";
import { Error } from "./Error";
import { Spinner } from "./Spinner";
import { toUpperCase } from "../helpers";


export const PokemonByType = () => {

  const { type } = useParams();

  const { cargando, setCargando, error, getPokemonByType, pokemon} = usePokemon(); 


  useEffect(() => {
    setCargando(true);

    setTimeout(() => {
      getPokemonByType(type);
      setCargando(false);
      
    }, 900);


  }, [type]);


  return (
    <div>
      { pokemon.length > 2 ? error ? <Error /> 
      : cargando ? <Spinner />
      :
        <div className="flex flex-wrap justify-center w-full px-10 max-w-screen-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-center my-3 w-full overscroll-contain">{type == 'Pokedex' ? 'null' : 'Pokedex -'} {toUpperCase(type)}</h1>
          {pokemon.map(pokemon => (
            <Pokemon 
              key={pokemon.id} 
              pokemon={pokemon} 
              type={type}
            />
          ))} 
        </div>: <Spinner />}

      </div>
  )
}
