// src/components/molecules/LanguageSelector.jsx
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector() {
  return (
    <div className={styles.languageSelector}>
      <button>🇺🇸</button>
      <button>🇪🇸</button>
      <button>🇫🇷</button>
    </div>
  );
}
