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
    </header>
  );
}