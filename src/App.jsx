import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path='*' element={<Error />}/>
          <Route path='/filters/:type' element={<PokemonByType />}/>
          <Route path='/filters/:type' element={<Navigate to='/'/>}/>

      </Routes>
    </PokemonProvider>
      
  
  )
}

export default App
