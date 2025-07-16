import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonList.module.css";
import SearchSection from "../molecules/searchSection";

const POKEMONS_PER_PAGE = 25;

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}`);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  const handleSearch = async () => {
  if (!searchTerm.trim()) {
    setSearchResult(null);
    setNotFound(false);
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
    if (!response.ok) throw new Error("Not found");
    const data = await response.json();
    setSearchResult(data);
    setNotFound(false);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResult(null);
      setNotFound(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
      <SearchSection onSearch={handleSearch} onInputChange={handleInputChange} value={searchTerm}/>
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
        <p className={styles.notFound}>No Pokémon found with that name.</p>
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
