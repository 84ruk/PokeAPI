import { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';




const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {


    const [filtroActual, setFiltroActual] = useState('Todos');
    const [pokemon, setPokemon] = useState([]);  //Estado que trae los datos especificos de la API
    const [busqueda, setBusqueda] = useState('');
    const [error, setError] = useState(false); //Anadir modal o componente que se mueste si es true
    const [alerta, setAlerta] = useState(''); //Anadir modal o componente que se mueste si es true
    const [cargando, setCargando] = useState(false); //Anadir modal o componente que se mueste si es true
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
            setHasMore(false);
        }else {
            return;
        }

    } 




    useEffect(() => {
        getInitialPokemons();
    }, []);

    useEffect(() => {
        getMorePokemons();
    }, [paginaActual]); 

  
    const handleInputChange = (e) => {
        setBusqueda({
            ...busqueda,
            [ e.target.name ]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();
        getPokemonByName(busqueda);
        setFiltroActual(busqueda.name);


    }

    const getPokemonByName = async (busqueda) => {

        setCargando(true);
        const { name } = busqueda;
        try {
            const respname = await axios    // SE BUSCA EL POKEMON POR NOMBRE
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((data) => {
            setPokemon([data.data]);
            setHasMore(false);
        });

        } catch (error) {
            setError(true);
            setAlerta('Ese Pokemon no existe :(');
            setHasMore(false);
        }
        setCargando(false);

    }
    
    return (
        <PokemonContext.Provider
        value={{
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
            alerta,
            getInitialPokemons,
            hasMore,
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