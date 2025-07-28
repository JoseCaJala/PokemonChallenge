import Image from "../atoms/Image";
import Button from "../atoms/Button";
import styles from "./PokemonControl.module.css";

export default function PokemonControl({ src, alt, onPrev, onNext, pokemonNumber }) {
  const prevNumber = String(Math.max(1, parseInt(pokemonNumber) - 1)).padStart(3, '0');
  const nextNumber = String(parseInt(pokemonNumber) + 1).padStart(3, '0');
  
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.nav}>
        <Button variant="white" onClick={onPrev}>
          Previous #{prevNumber}
        </Button>
        <Button variant="primary" onClick={onNext}>
          Next #{nextNumber}
        </Button>
      </div>
    </div>
  );
}
