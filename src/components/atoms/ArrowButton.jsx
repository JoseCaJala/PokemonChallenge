import { LuArrowLeft } from "react-icons/lu";
import styles from './ArrowButton.module.css';

export default function ArrowButton({ onClick }) {
  return (
    <button className={styles.arrowButton} onClick={onClick}>
      <LuArrowLeft size={20} />
    </button>
  );
}