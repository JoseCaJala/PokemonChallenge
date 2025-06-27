import styles from "./Badge.module.css";

function Badge({ type }) {
  return (
    <span className={`${styles.badge} ${styles[type.toLowerCase()]}`}>
      <img
        src={`/src/assets/${type.toLowerCase()}.svg`}
        alt={type}
        className={styles.icon}
      />
    </span>
  );
}
export default Badge;