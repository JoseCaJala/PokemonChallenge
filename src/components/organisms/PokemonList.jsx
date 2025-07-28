import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonList.module.css";
import { useSearch } from "../contexts/SearchContext";

const POKEMONS_PER_PAGE = 25;

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}`);
  const [loading, setLoading] = useState(false);
  const { searchResult, notFound } = useSearch();

  const loadPokemons = async () => {
    if (loading) return;
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

      setPokemons(prev => {
        const existinIds = new Set(prev.map(p => p.id));
        const newUnique = detailedPokemons.filter(p=> !existinIds.has(p.id));
        return [...prev, ...newUnique];
      });
      
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
        { searchResult ? (
          <li key={searchResult.id} className={styles.item}>
            <PokemonCard pokemon={searchResult} />
          </li>
        ): (
          pokemons.map(pokemon => (
            <li key={pokemon.id} className={styles.item}>
              <PokemonCard pokemon={pokemon} />
            </li>
          ))
        )}
      </ul>

      {notFound && (
        <p className={styles.notFound}>No Pokemon found with that name.</p>
      )}

      { !searchResult && (
        loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <button className={styles.loadMore} onClick={loadPokemons}>
            Load More
          </button>
        )
      )}
    </section>
  );
}
