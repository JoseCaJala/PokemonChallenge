import Image from "../atoms/Image";
import Button from "../atoms/Button";
import styles from "./PokemonControl.module.css";

export default function PokemonControl({ src, alt, onPrev, onNext }) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} />
      <div className={styles.nav}>
        <Button variant="white" onClick={onPrev}>Previous</Button>
        <Button variant="primary" onClick={onNext}>Next</Button>
      </div>
    </div>
  );
}
