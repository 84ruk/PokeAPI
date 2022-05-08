import { useContext, useState } from "react";
import PokemonContext from "../context/PokemonProvider";
import { Pokemon } from "./Pokemon";

export const Pokedex = () => {

  const { pokemon, busqueda, getPokemonByName, filtroActual } = useContext(PokemonContext);

  return (
    <div className="px-10 flex flex-col">

      <h1 className=" text-3xl font-semibold text-center my-3">{filtroActual ? 'Resultados de: ' : 'Pokedex -'} {filtroActual}</h1>

      <div className="flex flex-wrap gap-x-7 justify-center">

        {pokemon.length >= 1 ? 
          pokemon.map(pokemon => {
            return (
              <div
               key={pokemon.name} 
              >
            <Pokemon 
              pokemon={pokemon}
            />
              </div>
          )})
        : 
             <h1 className="text-center">No hay resultados</h1>
        }  

      </div>

    </div>
  )
}
