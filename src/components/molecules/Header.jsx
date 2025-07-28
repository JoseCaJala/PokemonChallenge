import styles from "./Header.module.css";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

export default function Header({ bottomContent = null }) {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <Image src="src/assets/Pokeball2.svg" alt="Pokeball" />
          <Text className={styles.title}>Pokédex</Text>
        </div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/pokemons">Types</a>
          <a href="/generations">Generations</a>
        </nav>
      </div>

      {/* show Addtional content under the topsection */}
      { bottomContent }
    </header>
  );
}