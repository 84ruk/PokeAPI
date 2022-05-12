 import { colorConfig } from "../helpers/types";
 import { toUpperCase } from "../helpers";

export const Pokemon = ({ pokemon }) => {

  return (
      <div className="w-full flex flex-wrap drop-shadow-md justify-center p-4 md:w-auto">
        <div className="flex flex-col w-60 h-auto  rounded bg-white hover:cursor-pointer hover:scale-110 ease-in duration-200">
            <div className={`h-2/4 w-full bg-gradient-to-t from-transparent ${colorConfig[pokemon.types[0].type.name].bgColor} flex rounded-md `}>
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
