import styles from './TypeBackground.module.css';
import Pokeball from '../../assets/Pokeball.svg';
import Dots from '../../assets/6x3.svg';

export default function TypeBackground({ type = "default", children }) {
  const backgroundClass = `bg-${type?.toLowerCase()}`;

  return (
    <div className={`${styles.wrapper} ${backgroundClass}`}>
      <img src={Dots} className={styles.dots} alt="dots" />
      <img src={Pokeball} className={styles.pokeball} alt="pokeball" />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

