import styles from "./Card.module.css";

export default function Card({ type }) {
  return (
    <div className={`${styles.card} ${type.toLowerCase()}`}>
      {}
    </div>
  );
}