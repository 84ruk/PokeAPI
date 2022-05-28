<<<<<<< HEAD
import { Header } from './components/Header'
import { Pokedex } from './components/Pokedex'
import { PokemonProvider } from './context/PokemonProvider'
=======
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { PokemonByType } from './components/PokemonByType';
import { PokemonDetails } from "./components/PokemonDetails";
import { PokemonProvider } from './context/PokemonProvider';
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7

function App() {

  return (
<<<<<<< HEAD
      <PokemonProvider >
        <Header />

        <Pokedex />
      </PokemonProvider>
=======
    <PokemonProvider >
      <Routes>

        <Route path="/" element={<Header />}>

          <Route path="/" index element={<Pokedex />}/>
          <Route path='filter/:name' element={<PokemonDetails />}/>
          <Route path='types/:type' element={<PokemonByType />}/>

          <Route path='*' element={<Navigate replace to='/'/>}/> 
        </Route>


      </Routes>
    </PokemonProvider>
      
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7
  
  )
}

export default App
