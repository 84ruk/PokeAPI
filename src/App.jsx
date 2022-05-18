import { Routes, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { PokemonByType } from './components/PokemonByType';
import { PokemonProvider } from './context/PokemonProvider';

function App() {

  return (
    <PokemonProvider >
          <Header />
      <Routes>

          <Route path='/' index element={<Pokedex />}/>
          <Route path='*' element={<Pokedex />}/>
          <Route path='/filters/:type' element={<PokemonByType />}/>

      </Routes>
    </PokemonProvider>
      
  
  )
}

export default App
