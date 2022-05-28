import { createContext, useState, useEffect} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';


const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {


    const [pokemon, setPokemon] = useState([]);  //Estado que trae los datos especificos de la API
    const [error, setError] = useState(false); //Anadir modal o componente que se mueste si es true
    const [alerta, setAlerta] = useState(''); //Anadir modal o componente que se mueste si es true
    const [cargando, setCargando] = useState(true); //Anadir modal o componente que se mueste si es true
    const [paginaActual, setPaginaActual] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams({})
    const name = searchParams.get('name') ?? '';
    const navigate = useNavigate();

     const handleInputChange = (e) => {

        setSearchParams({ 
            name: e.target.value
        });
        
    } 

    const handleClickType = (type) => {

        navigate(`/types/${type}`);

      };

    const handleClickName = (name) => {

        navigate(`/filter/${name}`);

      };

      const numstat = (num) => {

        const texto = num;
        const texto2 = texto.toString();
        const texto3 = texto2.charAt(0);
        return texto3;
      
      } 


     const getInitialPokemons = async () => {

        setPokemon([]);
        setCargando(true);
        try {
            const resp = await axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then((data) => {
                return data.data.results;
            })
            .then((data) => {
                return Promise.all(data.map((res) => 
                axios.get(res.url))); // ENTRAR A CADA ELEMENTO Y HACERLE UN GET A SU URL
            })
            .then((data) => {
                return data.map((res) => res.data); // RESULTADO FINAL DE CADA POKEMON CON TODOS SUS DATOS, SE GUARDAN EN RESP.
                
            });
            setPokemon(resp);
            
        } catch (error) {
            setCargando(false);
            setError(true);
            setAlerta('No encontre ese Pokemon :(');
            setHasMore(false);
            setPokemon([]);
        }
        setCargando(false);
        setError(false);

    }

    const getMorePokemons = async () => {
        
        if(paginaActual >= 20 && paginaActual <= 1120) {
            setHasMore(true);
            const resp = await axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${paginaActual}`)
            .then((data) => {
                return data.data.results;
            })
            .then((data) => {
            return Promise.all(data.map((res) => 
                axios.get(res.url))); // ENTRAR A CADA ELEMENTO Y HACERLE UN GET A SU URL
            })
            .then((data) => {
            return data.map((res) => res.data); // RESULTADO FINAL DE CADA POKEMON CON TODOS SUS DATOS, SE GUARDAN EN RESP.
    
            });
            setPokemon(prevPokemon => prevPokemon.concat(resp));
        } else if(paginaActual >= 1120){
            setHasMore(false);
        }else {
            return;
        }

    }

    const getPokemonByType = async (type) => {

        setPokemon([]);
        try {
            setError(false);
            setAlerta('');
            setPaginaActual(0);
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/type/${type}`)
            .then(data => {
            return data.data.pokemon;
            });
            const respurl = await Promise.all(respname.map(res => axios.get(res.pokemon.url))); // SE BUSCA EL POKEMON POR URL
            const resp = await Promise.all(respurl.map(res => res.data)); // SE BUSCA EL POKEMON POR URL
            setPokemon(resp);
        } catch (error) {
            setCargando(false);
            setError(true);
            setAlerta('No encontre ese Pokemon :(');
            setHasMore(false);
            setPokemon([]);
        }

    }


    const handleSubmit = (e) => {

        e.preventDefault();
        if(name.trim() == "") {
            return //hacer validacion si esta vacio
        }
        

        setError(false);
        setAlerta('');
        setSearchParams({
            name: name.toLowerCase()
        });
        navigate(`filter/${name.toLowerCase()}`);

    }


    const getPokemonByName = async (name) => {

        try {
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((data) => {
            setPokemon(data.data);
            setError(false);
            setHasMore(false);
            setAlerta('');
        });

        } catch (error) {
            setCargando(false);
            setError(true);
            setAlerta('No encontre ese Pokemon :(');
            setHasMore(false);
            setPokemon([]);
        }

    }

    useEffect(() => {
        getMorePokemons();
    }, [paginaActual]); 


    return (
        <PokemonContext.Provider
        value={{
            handleInputChange,
            setPokemon,
            pokemon,
            handleSubmit,
            setPaginaActual,
            paginaActual,
            error,
            setError,
            alerta,
            setAlerta,
            getInitialPokemons,
            hasMore,
            cargando,
            setHasMore,
            getPokemonByType,
            searchParams,
            setSearchParams,
            name,
            getPokemonByName,
            setCargando,
            handleClickType,
            numstat,
            handleClickName,
        }}
        >
        {children}
    </PokemonContext.Provider>
  )
}

export {
    PokemonProvider
}

export default PokemonContext;