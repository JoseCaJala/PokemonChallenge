import styles from "./Header.module.css";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <Image src="src/assets/Pokeball2.svg" alt="Pokeball" />
          <Text className={styles.title}>Pokédex</Text>
        </div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/types">Types</a>
          <a href="/generations">Generations</a>
        </nav>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="What Pokémon are you looking for?"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>
        <p className={styles.searchText}>
          Search for Pokémon by name or using the National Pokédex number.
        </p>
      </div>
    </header>
  );
}