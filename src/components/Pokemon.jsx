/* import { colorConfig } from "../helpers";
 */import { toUpperCase } from "../helpers";

export const Pokemon = ({ pokemon }) => {

    const colorConfig = {
        // Colors
        normal: {
          bgColor: 'to-neutral-500',
          typeColor: 'bg-neutral-500',
          
        },
        grass: {
          bgColor: 'to-green-500',
          typeColor: 'bg-green-500',
        },
        poison: {
          bgColor: 'to-lime-800',
          typeColor: 'bg-lime-800',
        },
        fire: {
          bgColor: 'to-amber-500',
          typeColor: 'bg-amber-500'
        },
        flying: {
          bgColor: 'to-blue-400',
          typeColor: 'bg-blue-400',
        },
        water: {
          bgColor: 'to-blue-500',
          typeColor: 'bg-blue-500',
        },
        bug: {
          bgColor: 'to-neutral-700',
          typeColor: 'bg-neutral-700',
        },
        ground: {
          bgColor: 'to-stone-800',
          typeColor: 'bg-stone-800',
        },
        electric: {
          bgColor: 'to-neutral-800', //Error con clases tailwind
          typeColor: 'bg-neutral-800',
        },
        fairy: {
          bgColor: 'to-pink-600',
          typeColor: 'bg-pink-600',
        },
        fighting: {
          bgColor: 'to-neutral-600',
          typeColor: 'bg-neutral-600',
        },
        psychic: {
          bgColor: 'to-amber-600',
          typeColor: 'bg-amber-600',
        },
        rock: {
          bgColor: 'to-stone-600',
          typeColor: 'bg-stone-600',
        },
        steel: {
          bgColor: 'to-stone-500',
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
          bgColor: 'to-neutral-800',
          typeColor: 'bg-neutral-800',
        },
        unknow: {
          bgColor: 'to-neutral-400',
          typeColor: 'bg-neutral-400',
        },
      };  // End of colorConfig

  return (
      <div className="font-sans flex flex-wrap drop-shadow-md justify-center">
        <div className="mt-4 flex flex-col w-60 h-auto rounded bg-white">
            <div className={`h-2/4 w-full bg-gradient-to-t from-transparent ${colorConfig[pokemon.types[0].type.name].bgColor} flex rounded-md`}>
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    className="h-24 w-auto m-auto" 
                />
            </div>
            <h2 className='font-semibold text-2xl h-1/4 antialiased m-auto'>
                {toUpperCase(pokemon.name)}
            </h2>
            <div className="p-5 h-auto">
                <p className="mb-2"> Tipo: </p>
                {pokemon.types.map(type => {
                    return(
                        <span key={type.type.name} 
                        className={`inline-block rounded-md px-2 py-1 text-sm font-semibold text-white mr-2 ${colorConfig[type.type.name].typeColor}` }>
                            {toUpperCase(type.type.name)}
                        </span>
                    )
                }
                )}

            </div>
        </div>
      </div>
  )
}
