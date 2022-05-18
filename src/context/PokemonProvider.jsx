import { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';




const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {


    const [filtroActual, setFiltroActual] = useState('Pokedex');
    const [pokemon, setPokemon] = useState([]);  //Estado que trae los datos especificos de la API
    const [busqueda, setBusqueda] = useState('');
    const [error, setError] = useState(false); //Anadir modal o componente que se mueste si es true
    const [alerta, setAlerta] = useState(''); //Anadir modal o componente que se mueste si es true
    const [cargando, setCargando] = useState(true); //Anadir modal o componente que se mueste si es true
    const [paginaActual, setPaginaActual] = useState(0);
    const [hasMore, setHasMore] = useState(true);



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

    const getPokemonByType = async (type) => {

        setCargando(true);
        setError(false);
        setAlerta('');
        setPaginaActual(0);
        setPokemon([]);
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/type/${type}`)
            .then(data => {
                return data.data.pokemon;
            });
            const respurl = await Promise.all(respname.map(res => axios.get(res.pokemon.url))); // SE BUSCA EL POKEMON POR URL
            const resp = await Promise.all(respurl.map(res => res.data)); // SE BUSCA EL POKEMON POR URL
            setPokemon(resp);
        setCargando(false);

    }

    const getMorePokemons = async () => {
        
        if(paginaActual >= 20 && paginaActual <= 1120) {
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
            setHasMore(true);
        }else {
            return;
        }

    } 

    


    useEffect(() => {
        setTimeout(() => {
            getInitialPokemons();
        }, 700);
    }, []);

    useEffect(() => {
        getMorePokemons();
    }, [paginaActual]); 

  
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
            setError(false);
            setHasMore(false);
            setAlerta('');
        });
        } catch (error) {
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
            handleInputChange,
            setPokemon,
            pokemon,
            handleSubmit,
            filtroActual,
            setFiltroActual,
            busqueda,
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