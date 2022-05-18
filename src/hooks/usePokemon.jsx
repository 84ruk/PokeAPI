import { useContext } from 'react';
import PokemonContext from '../context/PokemonProvider';

const usePokemon = () => {
    return useContext(PokemonContext);
}

export default usePokemon