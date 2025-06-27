import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonList.module.css";

const POKEMONS_PER_PAGE = 25;

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}`);
  const [loading, setLoading] = useState(false);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      setNextUrl(data.next);

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemons(prev => [...prev, ...detailedPokemons]);
    } catch (error) {
      console.error("Failed to load Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <section className={styles.container}>
      <ul className={styles.grid}>
        {pokemons.map(pokemon => (
          <li key={pokemon.id} className={styles.item}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <button className={styles.loadMore} onClick={loadPokemons}>
          Load More
        </button>
      )}
    </section>
  );
}
