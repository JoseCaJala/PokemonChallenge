import { useEffect, useState } from "react";
import PokemonCard from "./components/organisms/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
      const data = await response.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, []);

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;
