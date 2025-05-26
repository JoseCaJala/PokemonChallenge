import { useState } from 'react'
import PokemonCard from "./components/organisms/PokemonCard";
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <PokemonCard
        id={1}
        name="Bulbasaur"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        backgroundColor="#78c850" // Verde para Grass type
        types={[
          { label: 'Grass', color: 'grass' },
          { label: 'Poison', color: 'poison' }
        ]}
      />
      
      {/* Ejemplo con otro Pokémon */}
      <PokemonCard
        id={4}
        name="Charmander"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        backgroundColor="#f08030" // Naranja para Fire type
        types={[
          { label: 'Fire', color: 'fire' }
        ]}
      />
    </div>
  )
}

export default App
