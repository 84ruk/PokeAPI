import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { PokemonByType } from './components/PokemonByType';
import { PokemonDetails } from "./components/PokemonDetails";
import { PokemonProvider } from './context/PokemonProvider';

function App() {

  return (
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
      
  
  )
}

export default App
