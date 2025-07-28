import styles from './TabButton.module.css';

export default function TabButton({ label, active = false, onClick }) {
  const className = active ? styles.active : styles.inactive;
  return (
    <button className={`${styles.tabButton} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}