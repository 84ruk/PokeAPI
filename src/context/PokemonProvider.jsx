<<<<<<< HEAD
import { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';


=======
import { createContext, useState, useEffect} from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toLowerCase } from '../helpers';
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7


const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {


<<<<<<< HEAD
    const [filtroActual, setFiltroActual] = useState('Pokedex');
    const [pokemon, setPokemon] = useState([]);  //Estado que trae los datos especificos de la API
    const [busqueda, setBusqueda] = useState('');
=======
    const [pokemon, setPokemon] = useState([]);  //Estado que trae los datos especificos de la API
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
    const [error, setError] = useState(false); //Anadir modal o componente que se mueste si es true
    const [alerta, setAlerta] = useState(''); //Anadir modal o componente que se mueste si es true
    const [cargando, setCargando] = useState(true); //Anadir modal o componente que se mueste si es true
    const [paginaActual, setPaginaActual] = useState(0);
    const [hasMore, setHasMore] = useState(true);


<<<<<<< HEAD

     const getInitialPokemons = async () => {

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
        setCargando(false);
    }

const getMorePokemons = async () => {
        
        if(paginaActual >= 20 && paginaActual <= 1120) {
            const resp = await axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${paginaActual}`)
            .then((data) => {
            return data.data.results;
=======
     const getInitialPokemons = async () => {
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
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
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
<<<<<<< HEAD




    useEffect(() => {
        setTimeout(() => {
            getInitialPokemons();
        }, 700);
    }, []);
=======
    const numstat = (num) => {

        const texto = num;
        const texto2 = texto.toString();
        const texto3 = texto2.charAt(0);
        return texto3;
      
      } 

    const getPokemonByType = async (type) => {

        
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
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7

    useEffect(() => {
        getMorePokemons();
    }, [paginaActual]); 

<<<<<<< HEAD
  
    const handleInputChange = (e) => {
        setBusqueda(
            e.target.value
        );
        
    }
    
    const handleSubmit = (e) => {

        if(busqueda === '') {
            return;
        }

        e.preventDefault();
        setError(false);
        setAlerta('');
        getPokemonByName(busqueda);
        setFiltroActual(busqueda);
        

    }

    const getPokemonByName = async (busqueda) => {

        setCargando(true);
        try {
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then((data) => {
            setPokemon([data.data]);
=======
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


/*     const getPokemonByName = useMemo(async (name) => {

        try {
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((data) => {
            setPokemon(data.data);
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
            setError(false);
            setHasMore(false);
            setAlerta('');
        });

        } catch (error) {
<<<<<<< HEAD
            setError(true);
            setAlerta('Ese Pokemon no existe :(');
            setHasMore(false);
            setPokemon([]);
        }
        setCargando(false);

    }
    
    return (
        <PokemonContext.Provider
        value={{
            setBusqueda,
=======
            setCargando(false);
            setError(true);
            setAlerta('No encontre ese Pokemon :(');
            setHasMore(false);
            setPokemon([]);
        }

    }

    ,[name]) */

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
    
    


    return (
        <PokemonContext.Provider
        value={{
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
            handleInputChange,
            setPokemon,
            pokemon,
            handleSubmit,
<<<<<<< HEAD
            filtroActual,
            setFiltroActual,
            busqueda,
=======
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
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
<<<<<<< HEAD
=======
            getPokemonByType,
            searchParams,
            setSearchParams,
            name,
            getPokemonByName,
            setCargando,
            handleClickType,
            numstat,
            handleClickName,
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
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