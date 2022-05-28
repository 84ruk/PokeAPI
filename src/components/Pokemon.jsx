import { memo } from "react";
import { toUpperCase } from "../helpers";
import usePokemon from "../hooks/usePokemon";
/* import { typesConfig } from "../helpers/typesConfig";
 */

export const Pokemon = memo(({ pokemon }) => {
  

  const { handleClickType, handleClickName } = usePokemon();

 const typesConfig = {
    // Colors
    normal: {
      bgColor: 'to-neutral-500',
      typeColor: 'bg-neutral-500',
    },
    grass: {
      bgColor: 'to-green-300',
      typeColor: 'bg-green-400',
    },
    poison: {
      bgColor: 'to-lime-600',
      typeColor: 'bg-lime-600',
    },
    fire: {
      bgColor: 'to-amber-400',
      typeColor: 'bg-amber-400'
    },
    flying: {
      bgColor: 'to-blue-400',
      typeColor: 'bg-blue-400',
    },
    water: {
      bgColor: 'to-blue-300',
      typeColor: 'bg-blue-400',
    },
    bug: {
      bgColor: 'to-neutral-500',
      typeColor: 'bg-neutral-500',
    },
    ground: {
      bgColor: 'to-stone-500',
      typeColor: 'bg-stone-500',
    },
    electric: {
      bgColor: 'to-amber-400', 
      typeColor: 'bg-amber-400',
    },
    fairy: {
      bgColor: 'to-pink-300',
      typeColor: 'bg-pink-400',
    },
    fighting: {
      bgColor: 'to-neutral-400',
      typeColor: 'bg-neutral-500',
    },
    psychic: {
      bgColor: 'to-amber-300',
      typeColor: 'bg-amber-500',
    },
    rock: {
      bgColor: 'to-stone-400',
      typeColor: 'bg-stone-600',
    },
    steel: {
      bgColor: 'to-stone-400',
      typeColor: 'bg-stone-500',
    },
    ice: {
      bgColor: 'to-blue-300',
      typeColor: 'bg-blue-300',
    },
    ghost: {
      bgColor: 'to-gray-400',
      typeColor: 'bg-gray-400',
    },
    dragon: {
      bgColor: 'to-orange-400',
      typeColor: 'bg-orange-400',
    },
    dark: {
      bgColor: 'to-neutral-500',
      typeColor: 'bg-neutral-800',
    },
    unknow: {
      bgColor: 'to-neutral-400',
      typeColor: 'bg-neutral-400',
    },
  };  // End of colorConfig

  return (
      <div className="w-full flex flex-wrap drop-shadow-md justify-center p-4 md:w-auto transition ease-in-out delay-15 duration-300 hover:-translate-y-1 hover:scale-110 ">
        <div className="flex flex-col w-60 h-auto  rounded bg-white ">
            <div onClick={() => handleClickName(pokemon.name)} className={`h-2/4 w-full bg-gradient-to-t from-transparent ${typesConfig[pokemon.types[0].type.name].bgColor} flex rounded-md  hover:cursor-pointer`}>
                <img 
                    src={pokemon.sprites.other.home.front_default} 
                    alt={pokemon.name} 
                    className="h-24 w-auto m-auto"
                />
            </div>
            <h2 onClick={() => handleClickName(pokemon.name)} className='font-semibold text-2xl h-1/4 antialiased m-auto  hover:cursor-pointer'>
                {toUpperCase(pokemon.name)}
            </h2>
            <div className="p-5 h-auto">
                <p className="mb-2"> Tipo: </p>
                {pokemon.types.map(type => {
                    return(
                        <button onClick={() => handleClickType(type.type.name)} key={type.type.name} 
                        className={`inline-block rounded-md px-2 py-1 text-sm font-semibold text-white mr-2 hover:scale-110 ease-in duration-200 ${typesConfig[type.type.name].typeColor}` }
                        >
                            {toUpperCase(type.type.name)}
                        </button>
                    )
                }
                )}

            </div>
        </div>
      </div>
  )
}
)
