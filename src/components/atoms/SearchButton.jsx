import styles from "./SearchButton.module.css";

export default function SearchButton({ children, ...props }) {
  return <button className={styles.button} {...props}>{children}</button>;
}