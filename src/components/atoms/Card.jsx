import styles from "./Card.module.css";

export default function Card({ type, children, onClick }) {
  return (
    <article 
      className={`${styles.card} bg-${type.toLowerCase()}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </article>
  );
}