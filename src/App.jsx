import { Header } from './components/Header'
import { Pokedex } from './components/Pokedex'
import { PokemonProvider } from './context/PokemonProvider'

function App() {

  return (
      <PokemonProvider >
        <Header />

        <Pokedex />
      </PokemonProvider>
  
  )
}

export default App
