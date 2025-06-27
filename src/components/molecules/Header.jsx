import styles from "./Header.module.css";
import Text from "../atoms/Text";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src="src/assets/Pokeball.svg" alt="Pokeball" />
        <Text className={styles.title}>Pokédex</Text>
      </div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}