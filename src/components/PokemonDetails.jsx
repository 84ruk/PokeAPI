import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toUpperCase } from '../helpers';
import usePokemon from '../hooks/usePokemon';
import { Error } from './Error';
import { Spinner } from './Spinner';


export const PokemonDetails = () => {

  const { getPokemonByName, pokemon, error, cargando, setCargando, handleClickType, numstat, setPokemon } = usePokemon();

  const { name } = useParams();

   useEffect(() => {
    setCargando(true);
    setTimeout(() => {
      getPokemonByName(name);
      setCargando(false);
    }, 870);


  }, [name]); 


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
    typeColor: 'bg-amber-300',
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

const widthConfig = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',  

}


  return (
  
      <>
      
      {pokemon.types ? cargando ? <Spinner /> : error ? <Error /> : 
        
           <div className={`flex flex-col justify-between md:flex-row items-center md:justify-center w-10/12 mx-auto md:py-14 my-7 max-w-6xl h-auto rounded ${typesConfig[pokemon.types[0].type.name].typeColor} drop-shadow-2xl text-slate-800 `}>
            <div className='font-bold text-3xl md:w-4/12 flex items-center mx-auto my-7 flex-col'>
              <h2 >{toUpperCase(pokemon.name)}</h2>
              <img 
                className="h-56 w-auto" 
                src={pokemon.sprites.other.home.front_default}
                alt={pokemon.name} 
               />
            </div>
            <div className='md:w-7/12 w-full bg-white mx-auto rounded md:drop-shadow p-4 flex-wrap'>
              <div className='flex flex-col justify-between text-base pt-1'>
                <span className='font-bold text-1xl'>Height:</span> 
                {pokemon.height}
              </div>
              <div className='flex flex-col justify-between text-base pt-1'>
                <span className='font-bold text-1xl'>Ablity:</span> 
                {pokemon.abilities.map(ability => ability.ability.name).join(', ')}.
              </div>
              <div className='flex flex-col flex-wrap justify-between text-base pt-1'>
                <span className='font-bold text-1xl w-full'>Stats:</span> 
                {pokemon.stats.map(stats =>
                  <div className='flex flex-col justify-between text-base' key={stats.stat.name}>
                    <span className='font-medium'>{toUpperCase(stats.stat.name)}:</span>
                    <div className={`${widthConfig[numstat(stats.base_stat)]} ${typesConfig[pokemon.types[0].type.name].typeColor} h-7 text-white rounded mt-1`}></div>
                    <p>{stats.base_stat} P</p>
                  </div>
                )}
              </div>
              <div className='flex flex-col justify-between text-base pt-2'>
                <span className='font-bold text-1xl'>Types:</span>
                {pokemon.types.map(type => {
                    return(
                        <button onClick={() => {handleClickType(type.type.name), setPokemon([])}} key={type.type.name} 
                        className={`w-24 my-1 inline-block rounded-md px-2 py-1 text-sm font-semibold text-white mr-2 hover:cursor-pointer hover:scale-110 ease-in duration-200 ${typesConfig[type.type.name].typeColor}` }
                        >
                            {toUpperCase(type.type.name)}
                        </button>
                    )
                }
                )}
              </div>
            </div>
          </div> 
        
      : <Spinner />
    }
    </>
  
  )
}
