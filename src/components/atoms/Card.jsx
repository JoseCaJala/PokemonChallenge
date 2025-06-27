import styles from "./Card.module.css";

export default function Card({ type, children }) {
  return (
    <article className={`${styles.card} bg-${type.toLowerCase()}`}>
      {children}
    </article>
  );
}